import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { Card } from "../Card";
import { Wrapper, Grid, Item, Content, Stats } from "./styles";

const PageHeader = styled.header`
  padding: 1em 0;
`;

class Projects extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <Wrapper as={Container} id="projects">
        <PageHeader>
          <h2>Projects</h2>
        </PageHeader>
        <Grid>
          {projects.map(node => (
            <Item
              key={node.title}
              as="a"
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <Content>
                  <h4>{node.title}</h4>
                  <p>{node.description}</p>
                </Content>
              </Card>
            </Item>
          ))}
        </Grid>
      </Wrapper>
    );
  }
}

export default Projects;
