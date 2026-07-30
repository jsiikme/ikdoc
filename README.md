# Documentation kMeet

Documentation synthétique et originale pour la solution de visioconférence **kMeet** par Infomaniak.

## Sommaire

| Page | Sujet |
|------|-------|
| [Présentation](https://jsiikme.github.io/ikdoc/) | Vue d'ensemble de kMeet, atouts, éthique |
| [Démarrage](https://jsiikme.github.io/ikdoc/demarrage/) | Premier lancement, applications, autorisations |
| [Réunions](https://jsiikme.github.io/ikdoc/reunions/) | Créer, rejoindre, planifier, salles annexes |
| [Pendant la réunion](https://jsiikme.github.io/ikdoc/pendant-reunion/) | Partage d'écran, chat, dessin, contrôle à distance |
| [Enregistrement et diffusion](https://jsiikme.github.io/ikdoc/enregistrement/) | kDrive, streaming, transcription |
| [Sécurité et modération](https://jsiikme.github.io/ikdoc/securite/) | Mot de passe, chiffrement E2E, salle d'attente |
| [Intégrations](https://jsiikme.github.io/ikdoc/integrations/) | Calendar, kChat, kDrive, Custom Brand |
| [Plateformes](https://jsiikme.github.io/ikdoc/plateformes/) | Desktop, mobile, web, navigateurs compatibles |
| [Dépannage](https://jsiikme.github.io/ikdoc/depannage/) | Audio, vidéo, pare-feu, permissions |
| [Migration depuis Skype](https://jsiikme.github.io/ikdoc/migration-skype/) | Trois approches pour remplacer Skype |
| [FAQ](https://jsiikme.github.io/ikdoc/faq/) | Questions fréquentes condensées |

## Construire le site localement

Prérequis : Node.js 18+ et npm.

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:4321/ikdoc/.

Pour générer la version statique :

```bash
npm run build
```

Le contenu est produit dans le dossier `dist/`.

## Déploiement sur GitHub Pages

Le workflow GitHub Actions [.github/workflows/docs.yml](.github/workflows/docs.yml) build et déploie la documentation sur GitHub Pages à chaque `push` sur `main`/`master`.

Une fois le repo poussé sur GitHub :

1. Vérifiez que **Actions** est autorisé : *Settings → Actions → General → Allow all actions*.
2. Le workflow déploie automatiquement le build via `peaceiris/actions-gh-pages`.
3. Activez **Pages** : *Settings → Pages → Source = Deploy from a branch → Branch = `gh-pages` / root*.
4. Le site est accessible à : `https://jsiikme.github.io/ikdoc/`

Pour déclencher un déploiement manuel : *Actions → Build and deploy documentation → Run workflow*.

## Sources

Le contenu de cette documentation est une synthèse originale basée sur :

- La [page produit kMeet](https://www.infomaniak.com/fr/ksuite/kmeet)
- La [FAQ kMeet](https://www.infomaniak.com/fr/support/faq/admin2/kmeet) du Centre d'aide Infomaniak

Chaque page cite les articles de référence utilisés (FAQ ID Infomaniak).
