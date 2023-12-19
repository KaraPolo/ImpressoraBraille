import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR',
  title: 'Impressora Braille',
  description: 'Um projeto inclusivo',

  themeConfig: {
    nav: [
      { text: 'Principal', link: '/principal' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],
    search: {
      provider: 'local',
    },
    footer: {
      copyright: 'Dot Prints. © Todos os direitos reservados.',
    },
    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Principal', link: '/principal' },
          { text: 'Resumo', link: '/resumo' },
          { text: '1. Introdução', link: '/introducao' },
          {text: '2. Especificações Técnicas', link: '/especificacoes',},
          { text: '3. Componentes e Estruturas', link: '/componentes' },
          { text: '4. Instalação', link: '/instalacao' },
          { text: '5. Software e Controle', link: '/software' },
          { text: 'Entre em Contato', link: '/contato' },

          
          // ...
        ],
      },
    ],
  },
});
