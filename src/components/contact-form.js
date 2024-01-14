import { graphql } from "gatsby"
import * as React from "react"

import { useForm, ValidationError } from "@formspree/react"
import * as styles from "./contact-form.css";

import { Container, Section, Text, Box, Heading, Flex } from "./ui"

export default function Form(props) {
  console.log('these are form props', props)

  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <Section padding={4}>
      <Container width="narrow">
        <Box center paddingY={4}>
          <Heading>
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Flex>
            <Box padding={2}>
              <label htmlFor="email">Name</label>
              <input className={styles.formElement} id="name" type="name" name="email" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </Box>
            <Box padding={2}>
              <label htmlFor="email">Email Address</label>
              <input className={styles.formElement} id="email" type="email" name="email" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </Box>
          </Flex>
          <Flex>
            <Box padding={2}>
              <label htmlFor="message">Message</label>
              <textarea className={styles.textarea} id="message" name="message" />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </Box>
          </Flex>
          <Box padding={2}>
            <button className={styles.button} type="submit" disabled={state.submitting}>
              Submit
            </button>
            <ValidationError className={styles.formErrors} errors={state.errors} />
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
