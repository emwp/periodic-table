import React, { Component } from 'react';
import styled from 'styled-components';

class Grid extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Periodic Table</h1>
        <GridLayout>
          <Element>1</Element>
          <Element>2</Element>
          <Element>3</Element>
          <Element>4</Element>
          <Element>1</Element>
          <Element>2</Element>
          <Element>3</Element>
          <Element>4</Element>
          <Element>1</Element>
          <Element>2</Element>
          <Element>3</Element>
          <Element>4</Element>
          <Element>1</Element>
          <Element>2</Element>
          <Element>3</Element>
          <Element>4</Element>
          <Element>1</Element>
          <Element>2</Element>
          <Element>3</Element>
          <Element>4</Element>
          <Element>1</Element>
          <Element>2</Element>
          <Element>3</Element>
          <Element>4</Element>
          <Element>1</Element>
          <Element>2</Element>
          <Element>3</Element>
          <Element>4</Element>
          <Element>1</Element>
          <Element>2</Element>
          <Element>3</Element>
          <Element>4</Element>
          <Element>1</Element>
          <Element>2</Element>
          <Element>3</Element>
          <Element>4</Element>
          <Element>1</Element>
          <Element>2</Element>
          <Element>3</Element>
          <Element>4</Element>
        </GridLayout>
      </Wrapper>
    );
  }
}

const Element = styled.div`
  cursor: pointer;
  width: 5vw;
  height: 5vw;
  padding: 2px;
  border: 1px solid #333333;
  border-collapse: collapse;
  overflow: hidden;
`;

const GridLayout = styled.div`
  /* width: 90%; */
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(17, auto) 1fr;
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
