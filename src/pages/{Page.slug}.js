import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import { GatsbyImage } from "gatsby-plugin-image"
import SEOHead from "../components/head"

export default function Page(props) {
  console.log(props)
  const { page } = props.data

  return (
    <Layout>
      <Box paddingY={5}>
        <Container width="narrow">
          
          {page.image.image && (
            <GatsbyImage
            alt={page.image.image.alt}
            image={page.image.image.gatsbyImageData}
            />
            )}
          
          <Heading as="h1">{page.title}</Heading>

          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />

        </Container>

      </Box>
    </Layout>
  )
}

export const Head = (props) => {
  const { page } = props.data
  return <SEOHead {...page} />
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        image {
          alt
          gatsbyImageData
        }
      }
      html
    }
  }
`
