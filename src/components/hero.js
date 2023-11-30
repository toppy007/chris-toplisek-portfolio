import { graphql } from "gatsby"
import { motion } from 'framer-motion';
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
import { fadeInUpAnimation } from './animations';


export default function Hero(props) {

    const slideInAnimation = {
      initial: { x: '100vw', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 1, type: 'spring', damping: 10, stiffness: 80 },
    };

  return (
    <Section >
        <motion.div {...fadeInUpAnimation}>
          {props.image && (
            <GatsbyImage 
              className={backgroundImageContainer}
              alt={props.image.alt}
              image={getImage(props.image.gatsbyImageData)}
            />
          )}
        </motion.div>

        <Container className={textContainer}>
          <Flex gap={4} variant="responsive">
            <Box width="half" />
          <Box width="half">
          <motion.div {...slideInAnimation}>
            <Heading as="h1">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.h1}
            </Heading>
            <Subhead as="h2">{props.subhead}</Subhead>
              <Text as="p">{props.text}</Text>
            <ButtonList links={props.links} />
          </motion.div>
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
