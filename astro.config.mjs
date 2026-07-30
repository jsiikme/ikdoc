import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://jsiikme.github.io',
  base: '/ikdoc',
  integrations: [
    starlight({
      title: 'kMeet',
      description: 'Guide complet de la solution de visioconférence kMeet par Infomaniak',
      defaultLocale: 'fr',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/jsiikme/ikdoc' },
      ],
      sidebar: [
        { label: 'Présentation', link: '/' },
        { label: 'Démarrage', link: '/demarrage/' },
        {
          label: 'Réunions',
          items: [{ autogenerate: { directory: 'reunions' } }],
        },
        { label: 'Pendant la réunion', link: '/pendant-reunion/' },
        { label: 'Enregistrement et diffusion', link: '/enregistrement/' },
        { label: 'Sécurité et modération', link: '/securite/' },
        { label: 'Intégrations', link: '/integrations/' },
        { label: 'Plateformes', link: '/plateformes/' },
        { label: 'Dépannage', link: '/depannage/' },
        { label: 'Migration depuis Skype', link: '/migration-skype/' },
        { label: 'FAQ', link: '/faq/' },
      ],
    }),
  ],
});
