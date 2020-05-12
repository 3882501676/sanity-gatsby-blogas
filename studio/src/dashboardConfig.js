export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eba1462c6dc4ad46a5b0d62',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blogas-studio',
                  apiId: '7938c9b8-161c-4e5a-8757-3916b918a0ba'
                },
                {
                  buildHookId: '5eba14625401a7dd86a10f71',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blogas',
                  apiId: '970b7f6c-651c-41fc-af3e-520a1e0b08db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/3882501676/sanity-gatsby-blogas',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blogas.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
