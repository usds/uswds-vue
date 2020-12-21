const { description } = require('../../package')
const path = require("path");

module.exports = {
  
  //theme: 'thindark',
  
  base: '/uswds-vue/',

  dest: './docs',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'USWDS-Vue',
  
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
    lastUpdated: 'Last Updated', // string | boolean,    
    sidebarDepth: 1,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'US Digital',
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
        text: 'View on Github',
        link: 'https://github.com/usds/uswds-vue'
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
          title: 'Utils',
          collapsable: false,
          children: [
            'utils/breakpoints',
            'utils/display',
            'utils/spacing',
            'utils/layout',
            'utils/colors',
            'utils/typography',
            'utils/validation'           
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            'components/alert',
            'components/button',
            'components/card',
            'components/form',
            'components/form-group',
            {
              title: 'Form Inputs',
              collapsable: false,
              children: [
                'components/form-inputs/form-checkbox',
                'components/form-inputs/form-radio',
                'components/form-inputs/form-combobox',
                'components/form-inputs/form-date',
                'components/form-inputs/form-date-picker',
                'components/form-inputs/form-date-range',
                'components/form-inputs/form-fileinput',
                'components/form-inputs/form-input',
                'components/form-inputs/form-slider',
                'components/form-inputs/form-time',
                'components/form-inputs/form-boolean'
              ]
            },
            'components/footer',
            'components/header',
            'components/left-nav',
            'components/lists',
            'components/modal',
            'components/progress',
            'components/step-indicator',
            //'components/image',
            'components/table',
            'components/tabs',
            'components/tag'
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
    '@vuepress/plugin-medium-zoom'
  ]
}