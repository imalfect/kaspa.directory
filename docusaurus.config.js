// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kaspa Directory',
  tagline: 'All things Kaspa in one place',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kaspa.directory',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imalfect', // Usually your GitHub org/user name.
  projectName: 'kaspa.directory', // Usually your repo name.

  onBrokenLinks: 'throw',
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-19R89V8VMJ',
          anonymizeIP: true,
        },
      },
    ],
  ],
  // Add a new "communityProjects" section
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'communityProjects',
        path: 'community-projects',
        routeBasePath: 'community-projects',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'exchanges',
        path: 'exchanges',
        routeBasePath: 'exchanges',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'fundingPools',
        path: 'funding-pools',
        routeBasePath: 'funding-pools',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Kaspa Directory',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            docsPluginId: 'communityProjects',
            sidebarId: 'communityProjectsSidebar',
            position: 'left',
            label: 'Community Projects',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'exchanges',
            sidebarId: 'exchangesSidebar',
            position: 'left',
            label: 'Exchanges',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'fundingPools',
            sidebarId: 'fundingPoolsSidebar',
            position: 'left',
            label: 'Funding Pools',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sections',
            items: [
              {
                label: 'Community Projects',
                to: '/community-projects/intro',
              },
              {
                label: 'Exchanges',
                to: '/exchanges/intro',
              },
              {
                label: 'Funding Pools',
                to: '/funding-pools/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/kaspa',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/kaspacurrency',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/Kaspaenglish',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} iMalFect. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      communityProjects: {
        label: 'Community Projects',
        position: 'left',
      },
      tutorials: {
        label: 'Tutorials',
        position: 'left',
      }
    }),
};

module.exports = config;
