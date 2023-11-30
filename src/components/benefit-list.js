import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Box,
  Icon,
  Heading,
  Text,
  Space,
} from "./ui"
import { fadeInUpAnimation } from './animations';
import { motion } from 'framer-motion';

function Benefit(props) {
  return (
    <Box as="li" width="third" padding={4} paddingY={3}>
      {props.image && (
        <Icon
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
          size="small"
        />
      )}
      <Space size={2} />
      <Heading variant="subheadSmall">{props.heading}</Heading>
      <Text>{props.text}</Text>
    </Box>
  )
}

export default function BenefitList(props) {
  return (
    <Section>
      <Container>
        <motion.div {...fadeInUpAnimation}>
          <Box center>
            {props.heading && <Heading>{props.heading}</Heading>}
            {props.text && <Text variant="lead">{props.text}</Text>}
          </Box>
          <Space size={3} />
          <FlexList gutter={3} variant="start" responsive wrap>
            {props.content.map((benefit) => (
              <Benefit key={benefit.id} {...benefit} />
              ))}
          </FlexList>
        </motion.div>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBenefitListContent on HomepageBenefitList {
    id
    heading
    text
    content {
      id
      heading
      text
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
