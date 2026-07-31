---
title: Enregistrement et diffusion
---

## Enregistrer une réunion sur kDrive

kMeet permet d'enregistrer une réunion en vidéo, stockée sur votre [kDrive](../integrations/) Infomaniak.

:::note[Caractéristiques de l'enregistrement]
- L'enregistrement se fait **côté serveur** : aucune charge pour l'ordinateur du participant qui le lance.
- Format vidéo **.mp4**.
- Durée maximale de **3 heures**.
- La vidéo **n'est pas disponible** tant que tout le monde n'a pas quitté la visioconférence (y compris le modérateur) ou tant que quelqu'un n'a pas stoppé l'enregistrement manuellement.
:::

### Prérequis

- Posséder un **kDrive** (autonome ou au sein d'une offre kSuite / my kSuite, etc.).
- Être le **modérateur** de la visioconférence.
- **Ne pas** créer une visioconférence [chiffrée par une clé personnalisée](../securite/) : l'enregistrement n'est pas compatible avec le chiffrement E2E.

### Procédure

1. Démarrez kMeet via [kmeet.infomaniak.com](https://kmeet.infomaniak.com) ou depuis une application.
2. Cliquez sur l'icône **Commencer l'enregistrement**.
3. Activez l'enregistrement vidéo.
4. **Connectez-vous** à votre compte Infomaniak.
5. Sélectionnez un **kDrive** sur lequel enregistrer la visioconférence.
6. Cliquez sur **démarrer** la vidéo.
7. Pour arrêter, cliquez sur **Arrêter l'enregistrement** puis confirmez.
8. Choisissez si vous souhaitez vous rendre à l'endroit de l'enregistrement sur kDrive.

L'enregistrement est disponible à la **racine du kDrive** choisi dès la clôture du salon virtuel (dès que tous les participants ont quitté la visioconférence).

## Diffuser une réunion en streaming

kMeet permet de diffuser une réunion dans un flux séparé accessible par une URL unique, grâce au **Streaming Vidéo** Infomaniak.

:::caution[Disponibilité]
Le mode Streaming en direct n'est **pas disponible** avec kSuite gratuit, kSuite Standard, my kSuite et my kSuite+ (ik.me, etik.com, ikmail.com).
:::

### Avantages du streaming vs. réunion kMeet

- **Diffusion publique à grande échelle** sans restreindre l'accès à une audience limitée.
- Touche un public plus large : conférences, webinaires, évènements en direct.
- **Nombre illimité de spectateurs**.
- Accès par un simple **lien** — pas de gestion d'accès par participant.
- Un simple **navigateur Web** suffit pour accéder au flux.
- Accès passif : les spectateurs regardent sans s'enregistrer ni se connecter.
- Flux plus fluide, centré sur l'intervenant (pas de gestion des micros).
- **Résolution de diffusion plus élevée** que kMeet.

### Procédure

:::note[Prérequis]
- Être **modérateur** du kMeet pour créer un lien de diffusion live.
- Il n'est **pas nécessaire** de posséder une offre de Streaming vidéo Infomaniak.
:::

1. Démarrez kMeet via [ksuite.infomaniak.com/kmeet](https://ksuite.infomaniak.com/kmeet) ou depuis une application.
2. Une fois dans la réunion, cliquez sur le menu d'action **○○○** dans la barre d'outils.
3. Choisissez **Démarrer la diffusion en direct**.
4. Cliquez sur **Démarrer**.
5. Patientez le temps de la création du flux de Streaming Vidéo. **Un symbole affiché sur kMeet ainsi qu'un signal sonore** indiquent le début de la diffusion.
6. Une fois le lien du stream affiché, cliquez sur l'icône à droite pour **copier l'URL** du flux en direct.
7. Collez l'URL dans un message à l'attention des participants ou spectateurs.

:::note[Durée et disponibilité]
Le flux est diffusé en continu pendant **24 heures maximum** et **ne sera plus accessible** dès que la réunion kMeet est stoppée.
:::

## Transcrire en direct (sous-titres automatiques)

kMeet propose une **transcription automatique** qui affiche des sous-titres en temps réel, facilitant la compréhension des échanges et répondant aux besoins d'accessibilité.

:::note[Prérequis]
- Au minimum le **modérateur** de la réunion doit posséder **kSuite** (offres **Business** ou **Enterprise** uniquement).
- S'il active les sous-titres, alors **tous les participants** (même anonymes ou sans kSuite) pourront activer la transcription.
:::

### Procédure

1. Démarrez l'app kMeet (Web, desktop ou mobile).
2. Créez ou rejoignez une salle de réunion.
3. Autorisez l'accès au minimum à votre **microphone**.
4. Cliquez sur l'icône **○○○** dans la barre d'outils.
5. Cliquez sur **Activer les sous-titres**.
6. Ce qui est prononcé par les participants est affiché **en bas de votre fenêtre** kMeet.
7. Pour arrêter l'affichage de la transcription, cliquez à nouveau sur le menu adéquat.

---

## Sources

- [Enregistrer une réunion kMeet sur kDrive — FAQ 2472](https://faq.infomaniak.com/2472)
- [Diffuser une réunion kMeet via le mode Streaming en direct — FAQ 1355](https://faq.infomaniak.com/1355)
- [Transcrire en direct une réunion kMeet — FAQ 1431](https://faq.infomaniak.com/1431)
