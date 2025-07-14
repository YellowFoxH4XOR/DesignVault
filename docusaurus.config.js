// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DesignVault',
  tagline: 'A comprehensive collection of system design patterns and architectural solutions',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yourusername.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, this is usually your repo name
  baseUrl: '/designvault/',

  // GitHub pages deployment config.
  organizationName: 'yourusername', // Usually your GitHub org/user name.
  projectName: 'designvault', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/yourusername/designvault/tree/main/',
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
      // Replace with your project's social card
      image: 'img/designvault-social-card.jpg',
      navbar: {
        title: 'DesignVault',
        logo: {
          alt: 'DesignVault Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'patternsSidebar',
            position: 'left',
            label: 'Patterns',
          },
          {
            href: 'https://github.com/designvault/designvault',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Core Patterns',
            items: [
              {
                label: 'Distributed Systems',
                to: 'distributed-systems-core',
              },
              {
                label: 'Resilience & Fault Tolerance',
                to: 'resilience-fault-tolerance',
              },
              {
                label: 'Data Management',
                to: 'data-management',
              },
            ],
          },
          {
            title: 'Architecture',
            items: [
              {
                label: 'Microservices',
                to: 'microservices-architecture',
              },
              {
                label: 'Messaging Systems',
                to: 'messaging-systems',
              },
              {
                label: 'Cloud & Serverless',
                to: 'cloud-serverless',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/designvault/designvault',
              },
              {
                label: 'Contribute',
                to: 'contributing',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DesignVault. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'designvault',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),
};

module.exports = config; 