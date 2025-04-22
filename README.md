# Eden Role — Bot Discord de synchronisation avec Airtable

**Eden Role** est un bot Discord Node.js pour le serveur **EDEN RP**. Il permet de synchroniser automatiquement les membres ayant un rôle précis (comme "Admin") avec une base de données **Airtable**, pour un meilleur suivi et contrôle des accès.


## Fonctionnalités
- Surveille les changements de rôle via `guildMemberUpdate`
- Ajoute automatiquement le membre dans une base Airtable s’il reçoit le rôle admin
- Supprime automatiquement le membre dès qu’il perd le rôle admin
- Journalise les actions en console (ajout / suppression)


## Configuration .env (via interface Render / Koyeb / Railway)
```env
DISCORD_TOKEN=xxxxxxxxxxxxxxxxxxxxx
ADMIN_ROLE_ID=123456789012345678
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
```

> Le nom de la table dans Airtable doit être **Acces** et contenir au moins :
> - `Discord ID` (champ texte)
> - `Date ajout` (champ date)


## Technologies
- Node.js 18+
- discord.js v14
- axios
- dotenv


## Exemple de structure du projet
```
eden-role-bot/
├── index.js
├── package.json
├── .gitignore
└── README.md
```


## Exemple de `package.json`
```json
{
  "name": "eden-role-bot",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "axios": "^1.6.0",
    "discord.js": "^14.18.0",
    "dotenv": "^16.5.0"
  },
  "engines": {
    "node": "18.x"
  }
}
```


## Déploiement

Eden Role peut être déployé sur :
-  [Koyeb](https://app.koyeb.com) — via GitHub + secrets
-  [Railway](https://railway.app) — projet Node.js connecté à ton repo
-  [Replit](https://replit.com) + UptimeRobot — pour dev/test


## ⚠️ Bonnes pratiques
- **Ne mets jamais** tes tokens dans un `.env` pushé sur GitHub
- Utilise `.gitignore` pour ignorer les fichiers sensibles
- Ajoute des logs dans un canal Discord si besoin (ajout possible dans `index.js`)


Eden Role est conçu pour assurer une gestion fluide, sûre et automatisée de ton staff ou de tout rôle critique dans un serveur RP immersif.
