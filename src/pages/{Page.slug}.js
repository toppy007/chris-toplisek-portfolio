import * as React from "react"
import Slider from "react-slick";
import "../components/custom-slick-styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading, Flex, Space } from "../components/ui"
import { GatsbyImage } from "gatsby-plugin-image"
import SEOHead from "../components/head"
import NextIcon from "../components/next-icon"
import { motion } from 'framer-motion';



export default function Page(props) {
  console.log('this is for the corusel', props)
  const { page } = props.data
  console.log('pictures', page.pictures)
  
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };

  return (
    <Layout>
      <Box paddingY={5}>
        <Container width="normal">
          <Flex variant="spaceBetween" >
            <Flex variant="wrap" gutter={5}> 
              <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                >
                <button onClick={() => { slider?.current?.slickPrev(); }} style={{
                  width: "100px", height: "100px", background: "none", border: "none"
                }} >
                  <NextIcon flipped={true}/>
                </button>
              </motion.div>
            </Flex>
            <Flex >
              <Slider ref={slider} {...settings} style={{ width: '924px' }}>
                {page.pictures.map((picture, index) => (

                    <GatsbyImage
                      alt={picture.alt}
                      image={picture.image.gatsbyImageData}
                      style={{ width: '100%', height: '100%' }}
                      />

                ))}
              </Slider>
            </Flex>

            <Flex variant="wrap" gutter={5}> 
              <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                >

                <button onClick={() => { slider?.current?.slickNext(); }} style={{
                  width: "100px", height: "100px", background: "none", border: "none"
                }} >
                  <NextIcon flipped={false}/>
                </button>
              </motion.div>
            </Flex>
          </Flex>
        </Container>
        <Space size={5} />
        <Container width="narrow">
          <Heading as="h1">{page.title}</Heading>
          <div dangerouslySetInnerHTML={{ __html: page.html }}/>
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
