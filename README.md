# Eden Role — Bot Discord de synchronisation avec Airtable

**EdenRole** est un bot Discord conçu pour automatiser l'accès à une base Airtable, en fonction des rôles Discord.  Quand un utilisateur obtient le rôle **Admin**, il est ajouté dans la base. Quand il perd ce rôle, son accès est retiré.

---

## Fonctionnalités
-  **Ajout automatique** dans Airtable si un membre reçoit le rôle "Admin"
-  **Suppression automatique** de la base s'il perd le rôle
-  Journalisation claire dans la console
-  Message automatique toutes les 30 minutes : `Eden Role est toujours actif`
-  Serveur HTTP intégré compatible avec Fly.io / UptimeRobot
-  Possibilité d'ajouter une interface web ou Make pour la vérification d'accès

---

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

---

## Technologies
- Node.js 18+
- discord.js v14
- axios
- dotenv

---

## Exemple de structure du projet
```
eden-role-bot/
├── index.js
├── package.json
├── .gitignore
└── README.md
```

---

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

---

## Déploiement

Eden Role peut être déployé sur :
-  [Koyeb](https://app.koyeb.com) — via GitHub + secrets
-  [Railway](https://railway.app) — projet Node.js connecté à ton repo
-  [Replit](https://replit.com) + UptimeRobot — pour dev/test
-  [Fly.io](https://fly.io)

---

## Bonnes pratiques
- **Ne mets jamais** tes tokens dans un `.env` pushé sur GitHub
- Utilise `.gitignore` pour ignorer les fichiers sensibles
- Ajoute des logs dans un canal Discord si besoin (ajout possible dans `index.js`)

---

## Optionnel : Vérification d'accès externe
Tu peux connecter EdenRole à un **scénario Make** ou une **page HTML** :

- L'utilisateur entre son ID Discord
- Le scénario vérifie dans Airtable s'il a encore accès
- Redirection ou refus automatique

---

## Exemple de log automatique toutes les 30 minutes
```
🟢 Eden Role est toujours actif — 29/04/2025 à 23:30:00
```

---

## Développé pour le serveur RP : **EDEN RP**
Créé pour automatiser les accès aux outils de gestion du serveur (fiches, BG, problèmes, etc). Eden Role est conçu pour assurer une gestion fluide, sûre et automatisée de ton staff ou de tout rôle critique dans un serveur RP immersif.

---

## Licence
Projet libre sous licence MIT. Tu peux l’utiliser, le modifier et le redistribuer à ta sauce.
