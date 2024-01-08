import React from "react";
import { motion } from 'framer-motion';
import { graphql } from "gatsby"
import { Space, Container, Section, FlexList, Text, Logo } from "./ui"
import { fadeInUpAnimation } from './animations';

export function LogoItem(props) {
  if (!props.image) return null

  return (
    <Logo alt={props.alt} image={props.image.gatsbyImageData} size="medium" />
  )
}

export default function LogoList(props) {
  console.log(props)
  console.log(props.text)
  return (
    <Section paddingY={4}>
      <Container width="narrow">
      <motion.div {...fadeInUpAnimation}>
        <Text center variant="lead"> {props.text} </Text>
        <Space size={4} />
        <FlexList gap={4} variant="center">
          {props.logos.map(
            (logo) =>
            logo && (
              <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    >
              <li key={logo.id}>
                  <LogoItem {...logo} />
                </li>
              </motion.a>
              )
              )}
        </FlexList>
      </motion.div>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageLogoListContent on HomepageLogoList {
    id
    text
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
