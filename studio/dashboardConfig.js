export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d977ac3719a4295db3c9d6a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dc76yhoo',
                  apiId: '3ee386de-744e-4228-ae96-f2a59c984267'
                },
                {
                  buildHookId: '5d977ac3cc77209fc2c1b082',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-evgkjy3v',
                  apiId: '1f3ee6bc-8669-4efd-b56d-ab17fade21f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yood/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-evgkjy3v.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
