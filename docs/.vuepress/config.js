module.exports = {
  title: 'ZondyEchart 文档',
  description: '基于echars的图表组件库',
  base: '/zondyechartdoc/',
  port: 8084,
  plugins: ['demo-container'],
  themeConfig: {
    // 导航栏
    nav: [
      {
        text: '指南', link: '/guide/'
      },
      {
        text: '组件', link: '/components/'
      },
      {
        text: 'API', link: '/api/'
      },
      { text: 'GitHub', link: 'https://github.com' },
      { text: 'Echarts', link: 'https://echarts.apache.org/zh/index.html' }
    ],
    sidebar: {
      '/guide/': [
        ''
      ],
      '/components/': [
        '',
        'bar',
        'line'
      ]
    }
  },
  // chainWebpack: config => {
  //   config.resolve.alias.set('core-js/library/fn', 'core-js/features')
  // }
}