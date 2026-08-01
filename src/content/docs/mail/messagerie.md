---
title: Messagerie
---

Ce guide explique comment envoyer et recevoir des e-mails, gérer les pièces jointes, configurer des signatures et utiliser le répondeur automatique.

## Envoyer un e-mail

1. Ouvrez le webmail sur [ksuite.infomaniak.com/mail](https://ksuite.infomaniak.com/mail).
2. Cliquez sur le bouton **Nouveau message**.
3. Saisissez le ou les destinataires dans le champ **À**.
4. Saisissez l'objet et le corps du message.
5. Cliquez sur **Envoyer**.

:::tip
Vous pouvez utiliser l'IA souveraine d'Infomaniak pour rédiger, répondre, reformuler et corriger vos e-mails. Voir [IA souveraine](../ia/).
:::

## Pièces jointes

| Méthode | Taille maximale |
|---|---|
| SMTP (logiciel de messagerie) | 200 Mo |
| Webmail (mail.infomaniak.com) | 3 Go |
| SwissTransfer | 50 Go |

Pour joindre un fichier depuis le webmail :
1. Cliquez sur l'icône **Pièce jointe** dans la fenêtre de rédaction.
2. Sélectionnez le fichier depuis votre appareil ou depuis votre kDrive.
3. Le fichier est attaché au message.

:::tip
Pour les gros fichiers, utilisez **SwissTransfer** intégré : le destinataire recevra un lien de téléchargement au lieu d'une pièce jointe.
:::

## Signatures personnalisées

### Créer une signature

1. Dans le webmail, cliquez sur l'icône **Paramètres** en haut à droite.
2. Sélectionnez l'adresse mail concernée.
3. Cliquez sur **Signatures**.
4. Créez un nouveau modèle de signature.
5. Utilisez l'éditeur pour formater votre signature (texte, images, liens).

### Signatures d'organisation

Avec un Service Mail, les administrateurs peuvent créer des modèles de signatures partagés :
- Créez autant de modèles que nécessaire.
- Choisissez si vos utilisateurs doivent utiliser le modèle de l'organisation ou s'ils peuvent créer leurs propres signatures.

## Répondeur automatique

### Activer un message d'absence

1. Dans le webmail, cliquez sur l'icône **Paramètres**.
2. Sélectionnez l'adresse mail concernée.
3. Cliquez sur **Répondeur**.
4. Activez le répondeur.
5. Rédigez votre message d'absence.
6. Définissez une période (dates de début et fin) ou activez-le manuellement.
7. Le répondeur se désactive automatiquement à la date de fin.

### Créer un modèle de répondeur (administrateur)

Les administrateurs peuvent créer des modèles de répondeur partagés :

1. Accédez à la [gestion de votre Service Mail](https://manager.infomaniak.com/v3/ng/products/ksuite/service-mail) sur le Manager.
2. Cliquez sur le nom du Service Mail concerné.
3. Cliquez sur **Configuration globale** > **Répondeur**.
4. Cliquez sur **Ajouter un modèle de répondeur**.
5. Remplissez les champs et cliquez sur **Ajouter le modèle de répondeur**.
6. Activez l'option **Rendre visible** pour que les utilisateurs puissent l'utiliser.

### Appliquer un modèle sur des adresses

1. Dans le Manager, sélectionnez une ou plusieurs adresses mail.
2. Cliquez sur **Appliquer un modèle de répondeur**.
3. Sélectionnez le modèle de votre choix.
4. Cliquez sur **Activer**.

## Redirection

Transférez ou copiez automatiquement vos e-mails vers une ou plusieurs adresses :

1. Dans le webmail, cliquez sur l'icône **Paramètres**.
2. Sélectionnez l'adresse mail concernée.
3. Cliquez sur **Redirection**.
4. Activez la redirection.
5. Saisissez l'adresse de destination.
6. Choisissez de conserver ou non une copie locale.

## Alias et catégories

### Alias

Créez des variantes de votre adresse mail en modifiant ce qui est avant le `@` :
- Les messages envoyés à `jp@domaine.com` parviendront à l'adresse de base `jeandupont@domaine.com`.
- Les alias sont gratuits et illimités.

### Catégories

Triez vos messages en ajoutant des catégories après votre nom avec le signe `+` :
- `jeandupont+formation@domaine.com` arrive dans `jeandupont@domaine.com`.
- `jeandupont+travail@domaine.com` arrive dans `jeandupont@domaine.com`.

Vous pouvez ensuite créer des filtres pour trier automatiquement ces messages dans des dossiers spécifiques.

## Filtres et règles de tri

### Filtrer les e-mails entrants

1. Dans le webmail, cliquez sur l'icône **Paramètres**.
2. Sélectionnez l'adresse mail concernée.
3. Cliquez sur **Filtres et règles**.
4. Cliquez sur **Ajouter une règle**.
5. Définissez les conditions (expéditeur, sujet, contenu, etc.).
6. Définissez l'action (déplacer vers un dossier, marquer, supprimer, etc.).

### Trier les e-mails existants avec Thunderbird

Pour appliquer des règles de tri sur des messages déjà présents :

1. Installez et ouvrez [Thunderbird](https://thunderbird.net).
2. Configurez votre mail Infomaniak dans l'application.
3. Ouvrez **Outils** > **Filtres**.
4. Créez un nouveau filtre avec les conditions souhaitées.
5. Cliquez sur **Exécuter maintenant** pour trier les messages existants.

## Exporter un e-mail vers kDrive

Sauvegardez un e-mail directement sur votre kDrive au format `.eml` :

1. Ouvrez l'e-mail dans le webmail.
2. Cliquez sur l'icône **Ajouter à kDrive** en haut du message.
   - Si l'icône n'est pas visible, cliquez sur le menu **⋮** > **Personnaliser les actions**.
3. Choisissez le kDrive et l'emplacement de sauvegarde.
4. Cliquez sur **Ajouter**.

---

## Sources

- [Page produit Service Mail](https://www.infomaniak.com/fr/ksuite/service-mail)
- [Page caractéristiques](https://www.infomaniak.com/fr/ksuite/service-mail/caracteristiques)
- [Créer un modèle de répondeur — FAQ 2687](https://faq.infomaniak.com/2687)
- [Trier les e-mails existants — FAQ 2799](https://faq.infomaniak.com/2799)
- [Exporter un e-mail vers kDrive — FAQ 973](https://faq.infomaniak.com/973)
