import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Test project",
  description: "Project to test vue press",
  lang: 'en-US',

  base: '/vitepress-test-project/',
  lastUpdated: true,

  sitemap: {
    hostname: 'https://nelson-tests.github.io/vitepress-test-project/'
  },

  themeConfig: {
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: generateSidebar({
      documentRootPath: '/docs',

      removePrefixAfterOrdering: true,
      prefixSeparator: '.',

      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    editLink: {
      pattern: 'https://github.com/nelson-tests/vitepress-test-project/tree/main/docs/:path'
    }
  }
})
