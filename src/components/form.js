import { graphql } from "gatsby"
import * as React from "react"
import { Container, Section, Text, Box, } from "./ui"

export default function Form() {
  return (
    <Section >
      <Container >
        <Box>
            <Text>
                "hello world"
            </Text>
        </Box>
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
