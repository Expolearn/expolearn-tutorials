import React, { Component } from "react";

// Styled component
import styled from "styled-components";
import Home from "./components/Home";

const Title = styled.div`
  font-size: 32px;
  color: #f99901;
  background-color: #f2f2f2;
  text-align: center;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 2em;
`;
export default class App extends Component {
  render() {
    return (
      <Container>
        <Title> This is session 23 of Expolearn </Title>
        <Home />
      </Container>
    );
  }
}
