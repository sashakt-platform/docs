// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const BASE_URL = process.env.BASE_URL || '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sashakt',
  tagline: 'Helping you Make Assessments Easier',
  favicon: 'img/favicon.svg',

  url: 'https://sashakt-platform.github.io',
  baseUrl: BASE_URL,

  organizationName: 'sashakt-platform',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sashakt-platform/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/sashakt-social-card.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Sashakt',
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/sashakt-platform',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sashakt',
            items: [
              {
                label: 'projecttech4dev.org/sashakt',
                href: 'https://projecttech4dev.org/sashakt',
              },
              {
                label: 'Overview',
                to: '/',
              },
              {
                label: 'Quick Start',
                to: '/getting-started/quick-start',
              },
              {
                label: 'FAQ',
                to: '/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/C7BKvYPufp',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/project-tech4dev/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@ProjectTech4Dev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Project Tech4Dev',
                href: 'https://projecttech4dev.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sashakt-platform',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project Tech4Dev. Built with Docusaurus. Sashakt is developed in collaboration with Veddis Foundation and Avanti Fellows.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
