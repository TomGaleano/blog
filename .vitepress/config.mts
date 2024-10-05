import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'es-ES',
  title: "IsoBlog",
  description: "Un blog personal con notas de clases",
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 
      { light:'https://raw.githubusercontent.com/TomGaleano/blog/20dbcb29b7b9d98a6f05015d0c9a1c20c2d3b6fd/resources/icon-lm.svg',
        dark:'https://raw.githubusercontent.com/TomGaleano/blog/20dbcb29b7b9d98a6f05015d0c9a1c20c2d3b6fd/resources/icon-lm.svg'
      },
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Grupos', link: '/grupos' },
      { text: 'Anillos', link: '/anillos' },
      { text: 'Talleres', link: '/talleres' },
      { text: 'Manim', link: '/manim' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TomGaleano' }
    ]
  }
})
