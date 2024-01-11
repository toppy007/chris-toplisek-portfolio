import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Box, Text } from "./ui"
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Feature from "./feature"

export default function FeatureList(props) {

  return (
    <Section paddingY={4}>
      <Container width="narrow">
        <Text center variant="lead"> {props.text} </Text> 
        <Box paddingX={5}>
          {props.content.map((feature, i) => (
          <VerticalTimeline layout={ "2-column-left" } >
            <Feature key={feature.id} {...feature} />
          </VerticalTimeline>
          ))}
        </Box>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
