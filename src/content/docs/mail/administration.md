---
title: Administration
---

Ce guide explique comment administrer un Service Mail : créer des adresses, gérer les utilisateurs, configurer des alias et domaines, et gérer les accès.

## Accéder à la gestion du Service Mail

1. Accédez à la [gestion de votre Service Mail](https://manager.infomaniak.com/v3/ng/products/ksuite/service-mail) sur le Manager Infomaniak.
2. Cliquez directement sur le **nom** attribué au Service Mail concerné.
3. Le tableau de bord affiche toutes les adresses mail du Service Mail.

## Créer une adresse mail

1. Dans le Manager, cliquez sur **Ajouter une adresse mail**.
2. Saisissez le nom de l'adresse.
3. Sélectionnez le domaine.
4. Définissez un mot de passe ou invitez l'utilisateur par e-mail.
5. Cliquez sur **Créer**.

:::tip
Pour créer de nombreuses adresses (10+), prenez connaissance de l'outil de création en masse disponible dans le Manager.
:::

## Gérer les adresses mail

### Modifier une adresse

1. Cliquez sur l'adresse mail concernée dans le tableau.
2. Modifiez les paramètres : mot de passe, quotas, filtres, redirections, etc.

### Supprimer une adresse

1. Cliquez sur le menu **⋮** à droite de l'adresse concernée.
2. Choisissez **Supprimer**.
3. Confirmez la suppression.

:::caution
La suppression d'une adresse mail efface définitivement tous les e-mails et données associés. Pensez à exporter les e-mails avant suppression.
:::

## Mot de passe d'appareil

Un **mot de passe d'appareil** est nécessaire pour configurer un logiciel de messagerie (Outlook, Thunderbird, Apple Mail) ou un app mobile. Il est distinct du mot de passe de connexion au compte Infomaniak.

### Créer un mot de passe d'appareil

1. Dans le Manager, cliquez sur l'adresse mail concernée.
2. Cliquez sur **Mot de passe d'appareil**.
3. Cliquez sur **Ajouter un mot de passe d'appareil**.
4. Donnez un nom à l'appareil (ex : « Outlook portable »).
5. Copiez le mot de passe généré (il ne sera plus affiché ensuite).

## Alias

Créez des variantes de votre adresse mail en modifiant ce qui est avant le `@` :

- Les messages envoyés à `jp@domaine.com` parviendront à l'adresse de base `jeandupont@domaine.com`.
- Les alias sont gratuits et illimités.
- Parfait pour trier les e-mails par service (contact@, info@, support@).

## Redirection

Transférez ou copiez automatiquement vos e-mails vers une ou plusieurs adresses :

1. Cliquez sur l'adresse mail concernée dans le Manager.
2. Cliquez sur **Redirection**.
3. Activez la redirection.
4. Saisissez l'adresse de destination.
5. Choisissez de conserver ou non une copie locale.

## Nom de domaine personnalisé

Chaque Service Mail peut être lié à un nom de domaine et des domaines synonymes :

1. Assurez-vous que votre domaine est géré par Infomaniak ou que sa zone DNS pointe vers les serveurs de messagerie Infomaniak.
2. Dans le Manager, ajoutez le domaine à votre Service Mail.
3. Vérifiez les enregistrements DNS (MX, SPF, DKIM, DMARC) avec l'outil **Sécurité globale**.

Voir [Sécurité](../securite/) pour la configuration détaillée de SPF/DKIM/DMARC.

## Gérer les accès et permissions

### Droits des utilisateurs

Le gestionnaire du Service Mail peut définir les droits de chaque utilisateur :

- **Gérer les filtres** : permet d'activer/désactiver les filtres anti-spam et publicitaire.
- **Gérer les redirections** : permet de configurer les redirections d'e-mails.
- **Gérer les signatures** : permet de créer et modifier les signatures.

### Retirer un droit

1. Dans le Manager, cliquez sur l'adresse mail concernée.
2. Cliquez sur **Permissions**.
3. Activez ou désactivez les droits souhaités.

## Configuration globale

### Modèles de répondeur

Créez des modèles de message d'absence partagés avec les utilisateurs de votre Service Mail. Voir [Messagerie](../messagerie/) pour la procédure détaillée.

### Signatures d'organisation

Créez des modèles de signatures pour toute votre organisation. Choisissez si vos utilisateurs doivent utiliser le modèle de l'organisation ou s'ils peuvent créer leurs propres signatures.

## SSO (Single Sign-On)

kDrive et Service Mail prennent en charge l'authentification unique (SSO) pour les entreprises. Vos utilisateurs accèdent à leur messagerie avec la gestion existante des identités de votre société.

## Listes de discussion

Le service de liste de discussion permet de créer des listes de diffusion modérées :

- Les abonnés s'inscrivent via un formulaire ou par e-mail.
- Les modérateurs valident les inscriptions et modèrent les messages.
- Les réponses sont redistribuées automatiquement aux membres.
- Option de désabonnement simple et conforme au RGPD.

:::note
Le service de liste de discussion est disponible pour les utilisateurs l'ayant activé par le passé et ayant effectué la migration début 2025.
:::

---

## Sources

- [Page produit Service Mail](https://www.infomaniak.com/fr/ksuite/service-mail)
- [Page caractéristiques](https://www.infomaniak.com/fr/ksuite/service-mail/caracteristiques)
- [Créer un modèle de répondeur — FAQ 2687](https://faq.infomaniak.com/2687)
- [Liste de discussion — FAQ 2786](https://faq.infomaniak.com/2786)
