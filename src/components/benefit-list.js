import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Section, FlexList, Box, Heading, Text, Space, ProjectButtom} from "./ui"
import { motion } from 'framer-motion';

function Benefit(props) {
  console.log(props)
  return (
      <Box width="third" padding={2} paddingY={2}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
        <ProjectButtom >
          {props.image && (
            <GatsbyImage
            alt={props.image.alt}
            image={props.image.gatsbyImageData}
            />
            )}
          <Space size={2} />
          <Heading variant="subhead">{props.heading}</Heading>
          <Text variant="lead">{props.href}</Text>
          <Text variant="lead">{props.description}</Text>
        </ProjectButtom>
      </motion.div>
    </Box>
  )
}

export default function BenefitList(props) {
  return (
    <Section>
      <Container>
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
      href
      description
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`