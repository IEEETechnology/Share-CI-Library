import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Projects from "../components/Projects/Projects";
import Wrapper from "../components/Wrapper";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
// import Disqus from "../components/Disqus";

export default props => {
  const page = props.data.page;

  return (
    <Layout location={props.location}>
      <SEO
        title={page.frontmatter.title}
        description={page.excerpt}
        path={page.frontmatter.slug}
        cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
      />
      <Hero
        heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
        title={page.frontmatter.title}
      />
      <Projects projects={page.frontmatter.projects} />

      {/* {page.frontmatter.disqus && (
        <Wrapper>
          <Disqus slug={page.frontmatter.slug} title={page.frontmatter.title} />
        </Wrapper>
      )} */}
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        disqus
        cover {
          publicURL
        }
        projects {
          title
          description
          url
        }
      }
    }
  }
`;
