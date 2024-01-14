import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function Homepage(props) {
  const { homepage } = props.data

  const SectionWithInView = ({ blocktype, ...componentProps }) => {

    return (
      <div>
        {React.createElement(sections[blocktype] || Fallback, { ...componentProps })}
      </div>
    );
  };

  return (
    <Layout>
      {homepage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block;
        return <SectionWithInView key={id} blocktype={blocktype} {...componentProps} />;
      })}
    </Layout>
  )
}

export const Head = (props) => {
  const { homepage } = props.data
  return <SEOHead {...homepage} />
}

export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageHeroContent
        ...HomepageFeatureListContent
        ...HomepageBenefitListContent
        ...HomepageLogoListContent
        ...HomepageFormContent
      }
    }
  }
`
