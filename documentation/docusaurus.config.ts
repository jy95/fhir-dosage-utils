import { themes as prismThemes } from "prism-react-renderer";
import { join as pathJoin } from "path";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const isDeployPreview = !!process.env.NETLIFY;
const baseUrl = isDeployPreview ? "/" : "/fhir-dosage-utils/";

const config: Config = {
  title: "FHIR Dosage Utils",
  tagline: "From Data to Understandable Text and More",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://jy95.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jy95", // Usually your GitHub org/user name.
  projectName: "fhir-dosage-utils", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false, // Needed for Gh pages - https://github.com/facebook/docusaurus/issues/5026

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "docusaurus-plugin-typedoc-api",
      {
        projectRoot: pathJoin(__dirname, ".."),
        packages: ["."],
      },
    ],
    "./src/plugins/monacco.ts",
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          // https://docusaurus.io/docs/markdown-features/code-blocks#npm2yarn-remark-plugin
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: "A0H5ESUA6U",
      // Public API key: it is safe to commit it
      apiKey: "ed5931b0de2e3754e2da8e0f843443bd",
      indexName: "crawler_fhir-dosage-utils",
    },
    navbar: {
      title: "FHIR Dosage utils",
      logo: {
        alt: "FHIR Dosage utils Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "api", label: "API", position: "left" },
        { to: "playground", label: "Playground", position: "left" },
        { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/jy95/fhir-dosage-utils",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Jacques Yakoub. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
