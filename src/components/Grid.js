import React, { Component } from 'react';
import styled from 'styled-components';

class Grid extends Component {
  render() {
    return (
      <Wrapper>
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
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(17, auto) 1fr;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0;
`;

export default Grid;
