import * as React from "react"
import { graphql } from "gatsby"
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Subhead, Text, Box, Flex, NavLink, Icon} from "./ui"

export default function Feature(props) {
  console.log(props)
  return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#fff', borderTop: '4px solid orange' }}
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        iconStyle={{ background: '#ff7f00', color: '#fff' }}
        >
        <Flex variant="start">
          <Box center={true} width="quarter">
          <Icon alt={props.alt} image={props.image.gatsbyImageData} size="Large"/> 
          </Box>
          <Box >
            <Subhead >{props.heading}</Subhead>
            <Text variant="bold">{props.kicker}</Text>
            <Text>{props.year}</Text>
            <Text>{props.about}</Text>
            <Text variant="bold"> {props.text}</Text>
            <Text>{props.links.text}</Text>
            {props.links &&
              props.links.map((link) => (
                <Box key={link.id}>
                  <NavLink to={link.href}> {link.text}</NavLink>
                </Box>
              ))}
          </Box>
        </Flex>
      </VerticalTimelineElement>
    )
  }

export const query = graphql`
  fragment HomepageFeatureContent on HomepageFeature {
    id
    kicker
    year
    heading
    about
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
