import { useStaticQuery, graphql } from "gatsby"

export const useLatestPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
        query LatestPosts {
          allMarkdownRemark {
            edges {
                node {
                    id
                    fields{
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                  }
                  wordCount{
                    words
                  }
                }
              }
            }
          }`
  )
  return allMarkdownRemark
}