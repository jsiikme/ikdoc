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
    }),
  ],
});
