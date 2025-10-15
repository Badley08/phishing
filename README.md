# Démo pédagogique — Pourquoi stocker des mots de passe en clair est dangereux 🔥

> **AVERTISSEMENT IMPORTANT :**  
> Le code fourni dans cet atelier **enregistre volontairement des mots de passe en clair** dans la base de données pour la démonstration **uniquement**. **Ne reproduisez jamais** ce comportement en production. Ce dépôt doit servir exclusivement à montrer les risques et à enseigner les contre‑mesures.

## Objectif
Cette démo sert à :
- Montrer comment un mot de passe peut être envoyé et stocké **en clair** (mauvaise pratique).
- Montrer comment un attaquant, une fuite ou une mauvaise configuration peut exposer des données sensibles.
- Présenter ensuite les **bonnes pratiques** à appliquer pour protéger les utilisateurs.

## Contenu du dépôt
- `login.html` — Formulaire d’authentification (envoi email + mot de passe en clair).
- `server.js` — Backend Node.js/Express qui **insère** le mot de passe reçu tel quel dans une table `users`.
- `dashboard.html` — Page d’illustration post-login.
- `init_db.sql` — Script SQL complet pour créer la base et la table.
- `README.md` — Ce fichier.

## Utilisation (démo locale)
> **Conseil pédagogique :** fais la démonstration sur une machine de test (idéalement PC), en réseau local. N’utilise jamais de vrais comptes ou mots de passe.

1. Clone le projet ou place les fichiers dans un dossier sur ta machine de démonstration.
2. Installe Node.js (v14+).
3. Installe MySQL (ou utilise une instance de test).
4. Exécute le script SQL fourni (`init_db.sql`) pour créer la base et la table.
5. Installe les dépendances et lance le serveur :

```bash
npm install express cors body-parser mysql2
node server.js
# le serveur écoute sur http://localhost:3000
