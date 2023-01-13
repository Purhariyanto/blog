module.exports = {
  siteMetadata: {
    title: `WapPur`,
    description: `WapPur adalah blog yang membahas tentang kumpulan tutorial terupdate. WapPur menyajikan berbagai tutorial menarik yang dilengkapi dengan gambar.`,
    siteUrl: `https://wappur.my.id`,
    author: `WapPur`,
    imgLogo: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFdo_RmeoRYzrLbNbojU8MtHngWfa4GJYyRFRnNTBbJeGl7xgPGXpYhjw0rF-eGQG-GomNkDAd9QpiK-eVcw1HxzdvVGFWAB1V7YmiaPSV9mxPE_TU8KuyAogf1eQPtgBxc2ETrmKjYRqS2Xmw4Kf2rqvtDjgtJnB3ovsQXWd7FZ52sHNEQsP2zKhkCg/s1600/Logo-1000.png`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-next-seo`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-FCJLCZFKB6",
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
        excludes: [
          `/404/`,
          `/404*`,
          `/page/*`,
          `/p/*`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 450,
              linkImagesToOriginal: false
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 2rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "WapPur RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WapPur`,
        short_name: `WapPur`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
