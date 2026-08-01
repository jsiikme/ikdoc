---
title: Sécurité
---

Ce guide explique comment sécuriser votre messagerie : chiffrement des e-mails, anti-spam, SPF/DKIM/DMARC et protection contre le phishing.

## Chiffrement des e-mails en 1 clic

Le chiffrement s'active en un clic à l'envoi pour sécuriser des e-mails sensibles (fiches de paie, informations médicales, etc.) :

- Les e-mails chiffrés ne sont lisibles que depuis votre compte, dans un environnement sécurisé par Infomaniak.
- Conforme à la LPD et à la LDEP pour la transmission sécurisée de données sensibles.
- Fonctionne avec tous les fournisseurs de messagerie.
- Repose sur des standards open source éprouvés : **ECC** et **OpenPGP**.

### Activer le chiffrement

1. Dans le webmail, rédigez un nouveau message.
2. Cliquez sur l'icône **Chiffrement** dans la barre d'outils de rédaction.
3. Le chiffrement est activé pour ce message.
4. Le destinataire recevra un lien sécurisé pour consulter le message.

:::note
Le chiffrement fonctionne également depuis l'app mobile Infomaniak Mail.
:::

## Anti-spam

Le filtre anti-spam Infomaniak bloque plus de **99,9%** des spams, logiciels malveillants et attaques d'hameçonnage.

### Activer le filtre anti-spam

Le filtre est **automatiquement activé** lors de la création d'une adresse mail. Pour le vérifier ou le modifier :

1. Dans le webmail, cliquez sur l'icône **Paramètres**.
2. Sélectionnez l'adresse mail concernée.
3. Cliquez sur **Filtres et règles**.
4. Activez ou désactivez l'option **Filtre anti-spam**.

Les messages détectés comme spam sont placés dans le dossier **Spam** et **automatiquement effacés après 30 jours**.

### Personnaliser le filtre anti-spam

- **Modifier l'emplacement des spams** : choisissez un dossier de destination différent.
- **Bloquer des expéditeurs** : spécifiez des adresses ou domaines à toujours diriger vers le dossier Spam.
- **Autoriser des expéditeurs** : spécifiez des adresses à ne jamais filtrer.
- **Signaler un spam non filtré** ou un e-mail légitime filtré à tort (faux positif).

### Activer en masse (administrateur)

1. Accédez à la [gestion de votre Service Mail](https://manager.infomaniak.com/v3/ng/products/ksuite/service-mail) sur le Manager.
2. Sélectionnez plusieurs adresses mail.
3. Activez le filtre anti-spam pour toutes les adresses sélectionnées.

## Filtre publicitaire

Le filtre publicitaire classe automatiquement les newsletters et notifications dans des dossiers spécifiques :

1. Dans le webmail, cliquez sur l'icône **Paramètres**.
2. Sélectionnez l'adresse mail concernée.
3. Cliquez sur **Filtres et règles**.
4. Activez l'option **Filtre publicitaire**.

## SPF, DKIM et DMARC

Infomaniak active par défaut les protections essentielles contre l'usurpation d'identité. L'outil **Sécurité globale** permet de vérifier et configurer ces mécanismes.

### Accéder à l'outil Sécurité globale

1. Accédez à la [gestion de votre Service Mail](https://manager.infomaniak.com/v3/ng/products/ksuite/service-mail) sur le Manager.
2. Cliquez sur le nom du Service Mail concerné.
3. Cliquez sur **Sécurité globale** dans le menu latéral gauche.

Vérifiez que les 3 mécanismes s'affichent en **vert**. Dans le cas contraire, cela peut expliquer le traitement de vos e-mails comme spam.

### SPF (Sender Policy Framework)

SPF permet de spécifier quels serveurs sont autorisés à envoyer des e-mails au nom de votre domaine. Si votre domaine est géré par Infomaniak, un bouton **Corriger** permet de mettre à jour l'enregistrement SPF automatiquement.

:::note
Si votre domaine pointe chez un autre fournisseur (Wix, etc.), le SPF doit être configuré auprès de ce fournisseur.
:::

### DKIM (DomainKeys Identified Mail)

DKIM permet de signer numériquement les e-mails lors de leur envoi. Si votre zone DNS est gérée ailleurs, vous trouverez l'enregistrement DKIM à ajouter dans la section **Sécurité globale > DKIM**.

:::tip
Vous pouvez configurer plusieurs enregistrements DKIM sur votre domaine, ce qui est crucial si vous utilisez plusieurs fournisseurs de messagerie.
:::

### DMARC

DMARC indique aux serveurs de messagerie la politique à suivre en cas de réception d'un e-mail suspect provenant de votre domaine. Un assistant permet de configurer DMARC en **mode simple** ou **mode avancé**.

:::note
DMARC nécessite un SPF et DKIM valides. Les enregistrements nécessaires (type TXT) sont automatiquement appliqués dans la zone DNS si le domaine est géré dans la même Organisation.
:::

## Backup et restauration

- **Backup quotidien** : vos boîtes mail sont sauvegardées quotidiennement sur plusieurs serveurs en Suisse.
- **Restauration sous 30 jours** : les données sont restaurables dans les 30 jours suivant leur suppression.
- **Disponibilité 99,99%** : système de secours prêt à prendre automatiquement le relais en cas de panne.

## Sécurité des données et conformité

### LPD et RGPD

- **LPD / nLPD** (Suisse) : encadre la collecte et le traitement des données personnelles des résidents suisses.
- **RGPD** (UE) : influe sur les entreprises traitant les données des résidents européens, y compris en Suisse.

### Rôle d'Infomaniak

Infomaniak agit en tant que **sous-traitant** pour vos obligations liées au RGPD :
- Données conservées exclusivement dans des datacenters en Suisse.
- Normes de sécurité rigoureuses et amélioration constante des processus.
- Notification prompte en cas de violation de données.
- Tests d'intrusion annuels pour garantir l'étanchéité des données entre clients.

### Accord de traitement des données (DPA)

Un certificat RGPD (PDF) peut être généré depuis le Manager :

1. Accédez à la [gestion des DPA](https://manager.infomaniak.com/v3/ng/group-settings/certificate-rgpd) sur le Manager.
2. Cliquez sur **Générer** pour télécharger le document PDF personnalisé.

## Mention de mail externe

Pour plus de sécurité, activez la mention de **mail externe** : un avertissement visuel s'affiche pour les e-mails provenant de l'extérieur de votre Organisation, aidant à identifier les tentatives de phishing.

---

## Sources

- [Page produit Service Mail](https://www.infomaniak.com/fr/ksuite/service-mail)
- [Vérifier SPF/DKIM/DMARC — FAQ 2692](https://faq.infomaniak.com/2692)
- [Gérer le filtre anti-spam — FAQ 2838](https://faq.infomaniak.com/2838)
- [Gérer le filtre publicitaire — FAQ 2839](https://faq.infomaniak.com/2839)
- [Comprendre la sécurité des données — FAQ 2820](https://faq.infomaniak.com/2820)
- [Page caractéristiques](https://www.infomaniak.com/fr/ksuite/service-mail/caracteristiques)
