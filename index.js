// index.js
const { Client, GatewayIntentBits } = require("discord.js");
const axios = require("axios");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

const {
  DISCORD_TOKEN,
  ADMIN_ROLE_ID,
  AIRTABLE_API_KEY,
  AIRTABLE_BASE_ID,
} = process.env;

const AIRTABLE_TABLE = "tblEf6uL5QW9FEmUe";

client.on("guildMemberUpdate", async (oldMember, newMember) => {
  try {
    const hasAdminRole = newMember.roles.cache.has(ADMIN_ROLE_ID);
    const discordId = newMember.id;

    if (hasAdminRole) {
      await axios.post(
  `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`,
  {
    fields: {
      "Discord ID": discordId,
      "Username": `${newMember.user.username}`,
      "Date ajout": new Date().toISOString()
    }
  },
  {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json"
    }
  }
);
          console.log(`[+] Ajouté dans Airtable : ${discordId}`);
    } else {
      const res = await axios.get(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}?filterByFormula={Discord ID}='${discordId}'`,
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          },
        }
      );

      const record = res.data.records[0];
      if (record) {
        await axios.delete(
          `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}/${record.id}`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
          }
        );
        console.log(`[-] Supprimé de Airtable : ${discordId}`);
      }
    }
  } catch (err) {
    console.error("❌ Erreur :", err.message);
  }
});

client.once("ready", () => {
  console.log(`✅ Connecté en tant que ${client.user.tag}`);
});

client.login(DISCORD_TOKEN);

require("http")
  .createServer((req, res) => {
    console.log(`📶 Ping reçu de ${req.headers["user-agent"] || "inconnu"} à ${new Date().toISOString()}`);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("✅ Eden Role bot is alive");
  })
  .listen(8000, () => {
    console.log("🌐 Serveur HTTP actif sur le port 8000");
  });


