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
        <ProjectButtom variant="column" background="white" height="third" >
          <Link to={props.href}>
            <Box height="quarter">
              {props.image && (
              <GatsbyImage
              alt={props.image.alt}
              image={props.image.gatsbyImageData}
              style={{ width: '100%', height: '100%' }}
              />
              )}
            </Box>
          </Link>
          <Space size={2} />
        <Heading variant="caps" >{props.heading}</Heading>
        </ProjectButtom>
        <Space size={2} />
        <Text> {props.date}</Text>
        <Text variant="bold"> {props.description}</Text>
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
      date
      description
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`