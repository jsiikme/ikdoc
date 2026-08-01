---
title: Synchronisation
---

Ce guide explique comment configurer la synchronisation entre kDrive et vos ordinateurs, gérer le stockage local et utiliser le mode Lite Sync.

## Fonctionnement de la synchronisation

L'application desktop kDrive synchronise automatiquement vos fichiers entre votre ordinateur et le cloud :

- Vos fichiers apparaissent dans votre **gestionnaire de fichiers habituel** (Finder sur macOS, Explorateur sur Windows, gestionnaire de fichiers sur Linux).
- Vous pouvez travailler normalement sur vos fichiers, **même sans connexion Internet**.
- Les modifications sont synchronisées automatiquement une fois la connexion rétablie.
- Vous pouvez **synchroniser plusieurs kDrive simultanément**.

## Synchronisation sélective

Pour libérer de l'espace sur vos appareils :

1. Ouvrez l'application kDrive sur votre ordinateur.
2. Accédez aux **Paramètres** ou **Préférences**.
3. Choisissez la **synchronisation sélective**.
4. Sélectionnez uniquement les dossiers que vous souhaitez conserver en local.
5. Les autres dossiers restent accessibles en ligne mais n'occupent pas d'espace sur votre disque.

## Lite Sync

Le mode **Lite Sync** permet de consulter vos fichiers sans les stocker physiquement sur votre disque :

- Les fichiers apparaissent dans votre gestionnaire de fichiers mais sont téléchargés à la demande.
- Idéal pour les kDrive volumineux ou les ordinateurs avec peu d'espace de stockage.
- Double-cliquez sur un fichier pour le télécharger et l'ouvrir.

:::note[Disponibilité]
Lite Sync est disponible sur macOS et Windows. Non disponible sur Linux.
:::

## Résoudre les problèmes de synchronisation

### Statuts de fichiers incorrects (Windows)

Si les icônes de statut dans l'explorateur Windows ne correspondent pas à la réalité (ex : un fichier synchronisé affiche un statut incorrect) :

1. **Redémarrez l'explorateur Windows** :
   - Appuyez sur `Ctrl + Shift + Esc` pour ouvrir le gestionnaire de tâches.
   - Recherchez l'explorateur Windows, clic droit > **Terminer la tâche**.
   - Cliquez **Fichier** > **Exécuter une nouvelle tâche** > tapez `explorer.exe` > **Entrée**.

2. **Vérifiez l'intégrité du système** :
   - Ouvrez l'invite de commande en mode administrateur.
   - Exécutez successivement :
     ```
     SFC /scannow
     DISM /Online /Cleanup-Image /CheckHealth
     DISM /Online /Cleanup-Image /ScanHealth
     DISM /Online /Cleanup-Image /RestoreHealth
     ```

### Problème d'accès aux dossiers (Windows)

Si vous ne pouvez plus accéder à un dossier kDrive sur Windows :

1. Faites un clic droit sur le dossier > **Propriétés**.
2. Onglet **Sécurité** > bouton **Avancé**.
3. Cliquez sur **Modifier** à côté du champ **Propriétaire**.
4. Cliquez sur **Avancé** > **Rechercher**.
5. Sélectionnez votre compte utilisateur > **OK**.
6. Activez **Remplacer le propriétaire des sous-conteneurs et des objets**.
7. Cliquez sur **OK**.

### Synchronisation bloquée sur Linux

Si la synchronisation semble figée ou affiche l'erreur `Out of memory or limit number of inotify watches reached` :

1. Vérifiez la limite actuelle :
   ```
   cat /proc/sys/fs/inotify/max_user_watches
   ```
2. Augmentez la limite :
   ```
   echo fs.inotify.max_user_watches=131072 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

### L'application se ferme à l'ouverture (Linux)

Sur Ubuntu 24.04+ ou Debian, AppArmor peut bloquer kDrive :

- **Solution AppArmor** :
  ```
  sudo apt install apparmor-utils
  sudo aa-autodep /path/to/kDrive.AppImage
  sudo service apparmor restart
  ```

- **Conflit Wayland** : forcez l'affichage X11 :
  ```
  export QT_QPA_PLATFORM=xcb && ./kDrive.AppImage
  ```

### Vider le cache de l'app mobile

:::note
Le cache de l'app mobile ne supprime pas vos fichiers : ils restent sur le cloud. Cette action libère uniquement de l'espace sur votre appareil.
:::

#### Sur iOS

1. Ouvrez l'app kDrive.
2. Appuyez sur votre photo/initiales en bas à droite.
3. Appuyez sur **Paramètres** > **Gestion du stockage local**.
4. Supprimez le **cache** ou les **importations** (pour débloquer des importations bloquées).

#### Sur Android

1. Ouvrez les paramètres du téléphone.
2. Section **Applications** > **kDrive**.
3. Section **Stockage** > **Vider le cache**.

:::caution
Ne cliquez pas sur **Effacer le stockage** sur Android : cela effacerait les données utilisateurs (identifiants de connexion) en plus du cache.
:::

---

## Sources

- [Installer kDrive sur Linux — FAQ 617](https://faq.infomaniak.com/617)
- [Résoudre des statuts de fichiers incorrects — FAQ 1342](https://faq.infomaniak.com/1342)
- [Résoudre un problème d'accès aux dossiers — FAQ 1686](https://faq.infomaniak.com/1686)
- [Vider le cache de l'app mobile kDrive — FAQ 1561](https://faq.infomaniak.com/1561)
- [Page applications kDrive](https://www.infomaniak.com/fr/ksuite/kdrive/applications)
