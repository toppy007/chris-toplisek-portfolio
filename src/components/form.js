import { graphql } from "gatsby"
import * as React from "react"
import { Container, Section, Text, Box, Heading, Kicker, InteractiveIcon, Input, Label } from "./ui"

export default function Form(props) {
  console.log('these are form props', props)
  return (
    <Section >
      <Container >
      <Box center paddingY={5}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        <form name="contact" method="POST" data-netlify="true">
          <Box width="half">
          <Label variant="subhead">
            Your Name: 
            <Input type="text" name="name" placeholder="Enter Name" />
          </Label>
          </Box>
          <Box width="half">
          <Label variant="subhead">
            Your Email: 
            <Input type="text" name="name" placeholder="Enter Name" />
          </Label>
          </Box>
          <Box>
            <InteractiveIcon type="submit">
              Send
            </InteractiveIcon>
          </Box>
        </form>


      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageFormContent on HomepageForm {
    id
    heading
    kicker
    text
    }

`
