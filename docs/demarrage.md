# Démarrage rapide

Ce guide explique comment installer kMeet, lancer une première réunion et autoriser l'accès à la caméra et au micro.

## Télécharger l'application

kMeet est disponible sur plusieurs plateformes :

| Plateforme | Format |
|---|---|
| macOS | Application de bureau (.dmg) |
| Windows | Application de bureau (.exe) |
| Linux | Application de bureau (.AppImage) |
| iOS (iPhone / iPad) | App Store |
| Android | Google Play |
| Web | Navigateur — [kmeet.infomaniak.com](https://kmeet.infomaniak.com) |

Téléchargement des applications de bureau : [infomaniak.com/fr/applications/telecharger-kmeet](https://www.infomaniak.com/fr/applications/telecharger-kmeet).

!!! tip "App desktop ou app Web ?"
    En cas de problème avec l'app Web kMeet (service en ligne), il est recommandé d'essayer l'app desktop et vice-versa. L'app desktop offre également des fonctionnalités avancées comme le dessin sur partage d'écran et le contrôle à distance.

## Lancer une première réunion

1. Démarrez kMeet via [kmeet.infomaniak.com](https://kmeet.infomaniak.com) ou depuis l'application installée.
2. Cliquez sur **Démarrer une nouvelle réunion**.
3. Indiquez un **nom** pour votre salle de réunion.
4. Autorisez l'accès à votre **webcam** et votre **microphone** lorsque le navigateur ou l'application le demande.
5. Renseignez un **pseudonyme** ou votre nom et prénom.
6. Le cas échéant, activez les options avancées : [contrôle des participants](securite.md), [mot de passe](securite.md) ou [clé de chiffrement](securite.md).
7. Cliquez sur **Rejoindre la réunion**.
8. **Partagez le lien** du salon (icône utilisateur avec un `+`) pour inviter les participants.

## Autorisations caméra et micro

Avec les normes de sécurité actuelles, un navigateur ou une application doit obligatoirement demander l'autorisation d'accéder au micro et à la caméra dès qu'une visioconférence débute.

### Si le popup d'autorisation ne s'affiche pas

- Vérifiez les **icônes présentes dans la barre d'adresse** de votre navigateur.
- Dans les réglages du navigateur, vérifiez que *kmeet.infomaniak.com* est autorisé pour le microphone et la caméra.
- Après un changement de réglage, **actualisez la page** (F5).

### Vérifier les autorisations système

=== "macOS"
    1. Menu Pomme > **Réglages Système** > **Confidentialité et sécurité**.
    2. Cliquez sur **Microphone** : vérifiez que votre navigateur ou l'app kMeet est coché.
    3. Cliquez sur **Enregistrement de l'écran** (pour le partage d'écran) : ajoutez le navigateur ou kMeet si nécessaire.

=== "Windows"
    1. **Paramètres** > **Confidentialité et sécurité** > **Microphone**.
    2. Vérifiez que **« Accès au microphone »** est activé.
    3. Vérifiez que **« Autoriser les applications de bureau à accéder à votre microphone »** est activé pour kMeet ou votre navigateur.

=== "iOS"
    - **Réglages** > kMeet > vérifiez que **Micro** est activé.
    - Vérifiez aussi dans **Réglages** > **Confidentialité** > **Micro**.

=== "Android"
    - **Paramètres** > **Applications** > kMeet > **Autorisations** > Micro > **Autoriser si l'appli est utilisée**.

!!! warning "Cache physique de la caméra"
    Si votre image reste noire alors que la caméra est activée, vérifiez qu'un **cache de confidentialité mécanique** ne masque pas l'objectif. De nombreux portables ont un petit curseur au-dessus de l'écran : faites-le glisser pour libérer l'image. Aucun réglage logiciel ne permettra d'afficher l'image tant que le cache est fermé.

Pour aller plus loin en cas de problème : consultez la page [Dépannage](depannage.md).

---

## Sources

- [Guide de démarrage kMeet — FAQ 2474](https://faq.infomaniak.com/2474)
- [Résoudre un problème vidéo sur kMeet — FAQ 2452](https://faq.infomaniak.com/2452)
- [Page produit kMeet](https://www.infomaniak.com/fr/ksuite/kmeet)
