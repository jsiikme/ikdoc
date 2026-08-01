import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://jsiikme.github.io',
  base: '/ikdoc',
  integrations: [
    starlight({
      title: 'kSuite',
      description: 'Guides complets pour kMeet (visioconférence), kChat (messagerie instantanée), kDrive (stockage en ligne) et Service Mail (messagerie) par Infomaniak',
      defaultLocale: 'fr',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/jsiikme/ikdoc' },
      ],
      sidebar: [
        { label: 'Accueil', link: '/' },
        {
          label: 'kMeet',
          items: [
            { label: 'Présentation', link: '/kmeet/' },
            { label: 'Démarrage', link: '/kmeet/demarrage/' },
            { label: 'Réunions', link: '/kmeet/reunions/' },
            { label: 'Pendant la réunion', link: '/kmeet/pendant-reunion/' },
            { label: 'Enregistrement et diffusion', link: '/kmeet/enregistrement/' },
            { label: 'Sécurité et modération', link: '/kmeet/securite/' },
            { label: 'Intégrations', link: '/kmeet/integrations/' },
            { label: 'Plateformes', link: '/kmeet/plateformes/' },
            { label: 'Dépannage', link: '/kmeet/depannage/' },
            { label: 'Migration depuis Skype', link: '/kmeet/migration-skype/' },
            { label: 'FAQ', link: '/kmeet/faq/' },
          ],
        },
        {
          label: 'kChat',
          items: [
            { label: 'Présentation', link: '/kchat/' },
            { label: 'Démarrage', link: '/kchat/demarrage/' },
            { label: 'Conversations et messages', link: '/kchat/conversations/' },
            { label: 'Canaux', link: '/kchat/canaux/' },
            { label: 'Membres et invités', link: '/kchat/membres/' },
            { label: 'Notifications', link: '/kchat/notifications/' },
            { label: 'Euria, l\'IA éthique', link: '/kchat/ia/' },
            { label: 'Intégrations', link: '/kchat/integrations/' },
            { label: 'Plateformes et apparence', link: '/kchat/plateformes/' },
            { label: 'FAQ', link: '/kchat/faq/' },
          ],
        },
        {
          label: 'kDrive',
          items: [
            { label: 'Présentation', link: '/kdrive/' },
            { label: 'Démarrage', link: '/kdrive/demarrage/' },
            { label: 'Gestion des fichiers', link: '/kdrive/fichiers/' },
            { label: 'Partage et collaboration', link: '/kdrive/partage/' },
            { label: 'Synchronisation', link: '/kdrive/synchronisation/' },
            { label: 'OnlyOffice', link: '/kdrive/onlyoffice/' },
            { label: 'Microsoft 365', link: '/kdrive/microsoft-365/' },
            { label: 'SwissTransfer', link: '/kdrive/swisstransfer/' },
            { label: 'Sécurité et administration', link: '/kdrive/securite/' },
            { label: 'Applications et plateformes', link: '/kdrive/applications/' },
            { label: 'FAQ', link: '/kdrive/faq/' },
          ],
        },
        {
          label: 'Service Mail',
          items: [
            { label: 'Présentation', link: '/mail/' },
            { label: 'Démarrage', link: '/mail/demarrage/' },
            { label: 'Messagerie', link: '/mail/messagerie/' },
            { label: 'Sécurité', link: '/mail/securite/' },
            { label: 'Contacts et calendrier', link: '/mail/contacts-calendar/' },
            { label: 'IA souveraine', link: '/mail/ia/' },
            { label: 'Écosystème kSuite', link: '/mail/ecosysteme/' },
            { label: 'Administration', link: '/mail/administration/' },
            { label: 'Migration', link: '/mail/migration/' },
            { label: 'FAQ', link: '/mail/faq/' },
          ],
        },
      ],
    }),
  ],
});
