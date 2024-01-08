import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Section, FlexList, Box, Heading, Text, Space, ProjectButtom, Link} from "./ui"
import { motion } from 'framer-motion';

function Benefit(props) {
  return (
      <Box width="third" padding={2} paddingY={2}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
        <ProjectButtom >
          <Link to={props.href}>

    
          {props.image && (
            <GatsbyImage
            alt={props.image.alt}
            image={props.image.gatsbyImageData}
            />
            )}

          </Link>
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
        <Text center variant="lead"> {props.text} </Text>
        <Space size={4} />
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