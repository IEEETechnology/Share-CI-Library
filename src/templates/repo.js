import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Project from "../components/Project";
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
      <Wrapper>
        {/* <article> */}
        <Project content={page.body} date={page.frontmatter.date} />
        {/* </article> */}

        {page.frontmatter.projects.map(project => {
          const props = {
            title: project.title,
            description: project.description
          };
          return `${props.title} | ${props.description}`;
          // return <PostsListItem key={props.slug} {...props} />;
        })}
      </Wrapper>
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
        }
      }
    }
  }
`;
