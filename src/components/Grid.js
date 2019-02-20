import React, { Component } from "react";
import styled from "styled-components";
import data from "../data/data.json";
import Elements from "./Elements";

class Grid extends Component {
  componentDidMount() {
    console.log(data.elements[0].name);
  }

  render() {
    return (
      <Wrapper>
        <h1>Periodic Table</h1>
        <GridLayout>
          <Elements />
        </GridLayout>
      </Wrapper>
    );
  }
}

const GridLayout = styled.div`
  /* width: 90%; */
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(17, auto) 1fr;
  grid-template-rows: repeat(10, auto) 1fr;
  width: 90%;

  /* background: yellow; */
`;

const Wrapper = styled.div`
  /* background: red; */
  width: 90%;
  margin: 0 5%;
  h1 {
    text-align: center;
  }
`;

export default Grid;
