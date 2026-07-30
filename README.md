# Documentation kMeet

Documentation synthétique et originale pour la solution de visioconférence **kMeet** par Infomaniak.

## Construire le site localement

Prérequis : Python 3.8+ et pip.

```bash
pip install mkdocs mkdocs-material
mkdocs serve
```

## Construire le site localement

Prérequis : Python 3.8+ et pip.

```bash
pip install mkdocs mkdocs-material
mkdocs serve
```

Le site est servi sur http://127.0.0.1:8000.

Pour générer la version statique :

```bash
mkdocs build
```

Le contenu est produit dans le dossier `site/`.

## Déploiement sur GitHub Pages

Le workflow GitHub Actions [.github/workflows/docs.yml](.github/workflows/docs.yml) build et déploie automatiquement la documentation sur GitHub Pages à chaque `push` sur `main`/`master`.

Une fois le repo poussé sur GitHub :

1. Vérifiez que **Actions** est autorisé : *Settings → Actions → General → Allow all actions*.
2. Activez **Pages** : *Settings → Pages → Source = Deploy from a branch → Branch = `gh-pages` / root*.
   Le workflow pousse automatiquement le build sur la branche `gh-pages`.
3. Le site est accessible à : `https://<votre-utilisateur>.github.io/<votre-repo>/`

Pour déclencher un déploiement manuel : *Actions → Build and deploy documentation → Run workflow*.

## Structure de la documentation

| Page | Sujet |
|------|-------|
| Présentation | Vue d'ensemble de kMeet, atouts, éthique |
| Démarrage | Premier lancement, applications, autorisations |
| Réunions | Créer, rejoindre, planifier, salles annexes |
| Pendant la réunion | Partage d'écran, chat, dessin, contrôle à distance |
| Enregistrement et diffusion | kDrive, streaming, transcription |
| Sécurité et modération | Mot de passe, chiffrement E2E, salle d'attente |
| Intégrations | Calendar, kChat, kDrive, Custom Brand |
| Plateformes | Desktop, mobile, web, navigateurs compatibles |
| Dépannage | Audio, vidéo, pare-feu, permissions |
| Migration depuis Skype | Trois approches pour remplacer Skype |
| FAQ | Questions fréquentes condensées |

## Sources

Le contenu de cette documentation est une synthèse originale basée sur :

- La [page produit kMeet](https://www.infomaniak.com/fr/ksuite/kmeet)
- La [FAQ kMeet](https://www.infomaniak.com/fr/support/faq/admin2/kmeet) du Centre d'aide Infomaniak

Chaque page cite les articles de référence utilisés (FAQ ID Infomaniak).
