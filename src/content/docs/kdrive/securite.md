---
title: Sécurité et administration
---

Ce guide explique la sécurité de kDrive, la gestion des utilisateurs et l'administration de votre Organisation.

## Sécurité de kDrive

### Triple sauvegarde

Chaque fichier déposé sur kDrive est sécurisé sur **trois supports** répartis sur **deux datacenters** distincts en Suisse. Cette redondance garantit une fiabilité totale et protège contre la perte de données.

### Chiffrement

- **Transfert** : les données transitent via le protocole SSL/TLS.
- **Stockage** : les données sont chiffrées au moyen du standard **AES 128 bits** sur les serveurs Infomaniak.
- **Sauvegardes** : les sauvegardes sont également chiffrées.

### Authentification à deux facteurs

Renforcez la sécurité de votre compte avec l'authentification à deux étapes (2FA). Le Manager Infomaniak permet de vérifier l'activation de la 2FA pour tous les utilisateurs de votre Organisation.

### Domaines officiels Infomaniak

Pour garantir la sécurité de vos données, Infomaniak utilise plusieurs noms de domaines. Si vous utilisez un pare-feu ou un antivirus, ajoutez ces domaines à votre liste blanche :

| Domaine | Usage |
|---|---|
| `infomaniak.com` | Site principal et Manager |
| `infomaniakusercontent.com` | Stockage et téléchargement de fichiers |
| `ksharelink.com` | Liens de partage public kDrive et Mail |
| `swisstransfer.com` | Transfert de fichiers volumineux |
| `ik.me` | Domaine court pour Mail |
| `chk.me` | Liens courts et codes QR |

:::caution[Phishing]
Infomaniak ne vous demandera jamais votre mot de passe par e-mail. Vérifiez toujours que l'URL dans la barre d'adresse appartient à l'un des domaines listés ci-dessus avant de saisir vos identifiants.
:::

## Administration des utilisateurs

### Rôles au sein d'une Organisation

| Rôle | Permissions |
|---|---|
| **Responsable légal** | Accès complet à tous les produits et à la gestion de l'Organisation. |
| **Administrateur** | Accès complet à tous les produits visibles sur le Manager. |
| **Collaborateur** | Accès aux produits définis par l'administrateur. |
| **Utilisateur externe** | Accès limité aux dossiers partagés avec lui. Pas d'espace privé. |

### Gérer les accès produits d'un utilisateur

Pour modifier les droits d'accès aux produits pour un collaborateur :

1. Accédez à la [gestion des utilisateurs](https://manager.infomaniak.com/v3/ng/accounts/rights/users/list) sur le Manager.
2. Cliquez sur le menu **⋮** à droite de l'utilisateur concerné.
3. Cliquez sur **Modifier les accès produits**.
4. Donnez un accès à tout avec permissions maximum en 1 clic, ou sélectionnez les produits nécessaires.
5. Choisissez si un futur produit supplémentaire devra automatiquement être visible.
6. Cliquez sur **Enregistrer**.

:::note[Droits techniques et statistiques]
Avec kDrive, vous pouvez accorder des droits **TECHNIQUES** et/ou **STATISTIQUES** à un collaborateur : accès au tableau de bord, liens de partage, statistiques de stockage, utilisateurs actifs, appareils connectés, activité sur le kDrive.
:::

### Distinguer accès et gestion

Il est possible d'autoriser un utilisateur à **utiliser kDrive** (créer un PDF, par exemple) sans lui accorder le **droit de gestion du service** (changer l'offre, inviter un utilisateur, résilier, etc.).

### Modifier le rôle d'un utilisateur

1. Accédez à la [gestion des utilisateurs](https://manager.infomaniak.com/v3/ng/accounts/rights/users/list) sur le Manager.
2. Cliquez sur le menu **⋮** à droite de l'utilisateur.
3. Cliquez sur **Modifier le rôle**.
4. Choisissez le rôle souhaité.
5. Cliquez sur **Enregistrer**.

Un e-mail récapitulatif est envoyé à l'utilisateur.

### Retirer un utilisateur

1. Accédez à la [gestion des utilisateurs](https://manager.infomaniak.com/v3/ng/accounts/rights/users/list) sur le Manager.
2. Cliquez sur le menu **⋮** à droite de l'utilisateur.
3. Cliquez sur **Retirer de l'Organisation**.
4. Prenez connaissance des conséquences (suppression des données, calendriers, carnets d'adresses).
5. Confirmez la suppression.

:::caution
Les sauvegardes seront irrémédiablement supprimées lors de la résiliation, rendant toute restauration impossible.
:::

## Gérer l'offre kDrive

### Voir l'offre en cours

1. Accédez à l'app Web [kDrive](https://ksuite.infomaniak.com/kdrive).
2. Cliquez sur **Gérer** pour voir l'offre en cours.

Vous pouvez aussi consulter le [Manager Infomaniak](https://manager.infomaniak.com) pour retrouver votre kDrive parmi vos outils collaboratifs.

### Changer d'offre

1. Accédez à l'app Web kDrive.
2. Cliquez sur **Gérer**.
3. Basculez vers une offre supérieure depuis le Shop Infomaniak.

:::note
Si aucun produit kDrive n'est présent sur le Manager, l'app kDrive est accessible uniquement parmi les apps en haut à droite (offre my kSuite ou invitation externe).
:::

## Résilier kDrive

1. Accédez à la [gestion de votre produit](https://manager.infomaniak.com/v3/ng/products/ksuite/kdrive) sur le Manager.
2. Cliquez sur le menu **⋮** à droite de l'élément concerné.
3. Choisissez **Résilier**.
4. Suivez la procédure jusqu'au bout.

:::caution
Confirmez la résiliation par e-mail, sinon aucune donnée ne sera supprimée. Les frais ouverts et hors forfait demeurent dus. Les sauvegardes seront irrémédiablement supprimées.
:::

## SSO (Single Sign-On)

kDrive prend en charge l'authentification unique (SSO) pour les entreprises. Vos utilisateurs accèdent à leurs ressources professionnelles avec la gestion existante des identités de votre société.

## Groupes

Pour faciliter l'ajout de droits d'accès, créez des **Groupes** : des équipes liées à des produits Infomaniak avec les droits souhaités. Très pratique pour donner à un nouveau collaborateur les accès aux produits dont il aura besoin.

---

## Sources

- [Page produit kDrive](https://www.infomaniak.com/fr/ksuite/kdrive)
- [Gérer les accès produits — FAQ 1610](https://faq.infomaniak.com/1610)
- [Gérer les droits d'un utilisateur — FAQ 1633](https://faq.infomaniak.com/1633)
- [Retirer un utilisateur — FAQ 1738](https://faq.infomaniak.com/1738)
- [Modifier une offre kDrive — FAQ 1577](https://faq.infomaniak.com/1577)
- [Résilier kDrive — FAQ 1256](https://faq.infomaniak.com/1256)
- [Domaines officiels — FAQ 1751](https://faq.infomaniak.com/1751)
