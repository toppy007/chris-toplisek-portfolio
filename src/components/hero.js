import { graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"

import { backgroundImageContainer, textContainer } from "./hero.css"

export default function Hero(props) {
  return (
    <Section >

            {props.image && (
              <GatsbyImage 
                className={backgroundImageContainer}
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
              )}

            <Container className={textContainer}>
            <Flex gap={4} variant="responsive">
          <Box width="half">
          </Box>
          <Box width="half">
            <Heading as="h1">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.h1}
            </Heading>
            <Subhead as="h2">{props.subhead}</Subhead>
            <Text as="p">{props.text}</Text>
            <ButtonList links={props.links} />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
