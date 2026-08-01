---
title: Migration
---

Ce guide explique comment migrer vos e-mails, contacts et calendriers depuis un autre fournisseur vers Infomaniak.

## Migration gratuite et accompagnée

Infomaniak propose un **service de migration gratuit** avec accompagnement total :

- Support 100% suisse.
- Réponse dans les plus brefs délais.
- Migration 100% gratuite.

Pour planifier votre migration : [infomaniak.com/fr/support/service-de-migration](https://www.infomaniak.com/fr/support/service-de-migration).

![Migration gratuite vers Infomaniak](../../../assets/images/mail/free-migration.webp)

## Importer vos e-mails par IMAP

L'outil d'importation Infomaniak copie automatiquement le contenu de votre ancienne adresse mail vers votre nouvelle adresse Infomaniak.

### Prérequis

- Posséder un Service Mail sur le Manager Infomaniak.
- Disposer d'un quota d'adresses libres.
- Créer l'adresse de destination sur le Service Mail.
- L'adresse de destination doit être rattachée à votre compte Infomaniak.
- Activer les fonctionnalités POP/IMAP/SMTP sur l'adresse source si nécessaire.

### Importer depuis Gmail, Outlook.com, GMX, etc.

1. Accédez à l'outil d'importation : [import-email.infomaniak.com](https://import-email.infomaniak.com/).
2. Connectez-vous à votre compte Infomaniak.
3. Cliquez sur l'importation par **IMAP**.
4. Cliquez sur l'importation **unique**.
5. Saisissez votre **adresse mail source** (dont le contenu est à copier).
6. Saisissez le **mot de passe** de l'adresse source.
7. Modifiez les **Paramètres avancés** si nécessaire (serveur IMAP, port, SSL).
8. Cliquez sur **Confirmer**.
9. Choisissez l'adresse de destination Infomaniak.
10. Cliquez sur **Importer les e-mails**.

:::note
L'opération n'affecte ni les données déjà présentes sur l'adresse de destination, ni celles de l'adresse source. Les doublons sont gérés automatiquement. Une fois l'importation démarrée, il n'est plus possible de l'interrompre.
:::

### Importer en lot (plusieurs adresses)

Pour importer le contenu de plusieurs adresses mail (maximum 25 par 25) :

1. Accédez à [import-email.infomaniak.com](https://import-email.infomaniak.com/).
2. Cliquez sur l'importation par **IMAP** > mode avancé.
3. Téléchargez le modèle CSV.
4. Éditez le fichier avec les informations : `source-email;sourcePassword;imap.host.com;993;1;dest-email`.
5. Chargez le fichier CSV.
6. Corrigez les erreurs éventuelles.
7. Cliquez sur **Importer**.

### Suivi de l'importation

- Un e-mail de confirmation est envoyé à toutes les adresses concernées une fois l'importation terminée.
- Un suivi est disponible dans les **réglages de l'adresse mail de destination** sur l'app Web Mail.

## Paramètres IMAP des principaux fournisseurs

| Fournisseur | Serveur IMAP | Port | SSL |
|---|---|---|---|
| Gmail | `imap.gmail.com` | 993 | Oui |
| Outlook.com / Hotmail | `outlook.office365.com` | 993 | Oui |
| GMX | `imap.gmx.ch` (ou .net, .com) | 993 | Oui |
| Yahoo | `imap.mail.yahoo.com` | 993 | Oui |
| Bluewin | `imaps.bluewin.ch` | 993 | Oui |
| OVH | `ssl0.ovh.net` | 993 | Oui |

:::tip
Activez les fonctionnalités POP/IMAP/SMTP sur votre ancienne adresse si elles sont désactivées par défaut (notamment GMX).
:::

## Importer des contacts

Importez tous vos carnets d'adresses depuis un fichier **VCARD** ou **CSV** :

1. Ouvrez l'app Contacts dans le webmail.
2. Cliquez sur **Importer**.
3. Sélectionnez le fichier VCARD ou CSV.
4. Choisissez le carnet de destination.
5. Cliquez sur **Importer**.

## Importer des calendriers

Importez tous vos rendez-vous depuis un fichier **ICS** :

1. Ouvrez l'app Calendar dans le webmail.
2. Cliquez sur **Importer**.
3. Sélectionnez le fichier ICS.
4. Choisissez le calendrier de destination.
5. Cliquez sur **Importer**.

## Transférer un nom de domaine

Transférez vos noms de domaines vers Infomaniak pour faciliter la configuration de vos adresses mail :

1. Accédez au [Manager Infomaniak](https://manager.infomaniak.com).
2. Ajoutez un transfert de domaine.
3. Suivez les instructions pour déverrouiller le domaine chez votre registraire actuel.
4. Confirmez le transfert.

:::note
Si votre domaine n'est pas géré par Infomaniak, vous devez configurer les enregistrements MX, SPF, DKIM et DMARC auprès de votre fournisseur DNS pour que vos e-mails fonctionnent correctement.
:::

## Copier le contenu mail Infomaniak en interne

Pour copier le contenu d'une adresse mail Infomaniak vers une autre adresse Infomaniak :

1. Ajoutez un **mot de passe d'appareil** à l'adresse source.
2. Accédez à [import-email.infomaniak.com](https://import-email.infomaniak.com/).
3. Connectez-vous à votre compte Infomaniak.
4. Cliquez sur l'importation par **IMAP** > importation **unique**.
5. Saisissez l'adresse source et le mot de passe d'appareil.
6. Cliquez sur **Confirmer**.
7. Choisissez l'adresse de destination.
8. Cliquez sur **Importer les e-mails**.

## Après la migration

Dès que votre nom de domaine est configuré pour fonctionner avec Infomaniak :

1. Modifiez les paramètres de vos logiciels de messagerie pour qu'ils se connectent aux serveurs Infomaniak.
2. Utilisez l'assistant de configuration : [config.infomaniak.com](https://config.infomaniak.com).
3. Vérifiez la sécurité de votre messagerie avec l'outil **Sécurité globale** (SPF/DKIM/DMARC).

---

## Sources

- [Page produit Service Mail](https://www.infomaniak.com/fr/ksuite/service-mail)
- [Copier le contenu mail GMX — FAQ 2715](https://faq.infomaniak.com/2715)
- [Copier le contenu mail Infomaniak en interne — FAQ 2826](https://faq.infomaniak.com/2826)
- [Service de migration Infomaniak](https://www.infomaniak.com/fr/support/service-de-migration)
