const { description } = require('../../package')
const path = require("path");

module.exports = {
  
  base: '/uswds-vue/',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'USWDS Vue Components',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/favicons/favicon-32x32.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  markdown: {
    lineNumbers: true
  },  

  //sass: {
  //  prependData: '@import "@theme/styles/global.scss"'
  //},  

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,    
    sidebarDepth: 1,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'USDS',
        link: 'https://usds.gov/'
      },      
      {
        text: 'USWDS',
        link: 'https://designsystem.digital.gov/'
      },
      //{
      //  text: 'Config',
      //  link: '/config/'
      //},
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            'components/alert',
            'components/button',
            'components/pill',
            'components/tag',
            'components/card',
            'components/layout',
            'components/header',
            'components/footer',
            'components/forms',
            'components/form-combobox',
            'components/form-input',
            'components/image',
            'components/lists'
          ]
        }

      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}