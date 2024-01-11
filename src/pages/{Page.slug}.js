import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import { GatsbyImage } from "gatsby-plugin-image"
import SEOHead from "../components/head"

export default function Page(props) {
  console.log('this is for the corusel', props)
  const { page } = props.data
  console.log('pictures', page.pictures)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      <Box paddingY={5}>
        <Container width="narrow">
        <Slider {...settings}>
          {page.pictures.map((picture, index) => (
            <Box key={index}>
              <GatsbyImage
                alt={picture.alt}
                image={picture.image.gatsbyImageData}
              />
            </Box>
          ))}
        </Slider>


          
          
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
      pictures {
        id
        alt
        image {
          id
          gatsbyImageData
          alt
        }
      }
      html
    
  }
}
`
