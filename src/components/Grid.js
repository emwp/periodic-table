import React from 'react';
import styled from 'styled-components';
import Elements from './Elements';

const Grid = () => {
  return (
    <Wrapper>
      <h1>Periodic Table</h1>
      <GridLayout>
        <Elements />
      </GridLayout>
    </Wrapper>
  );
};

const GridLayout = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(17, auto) 1fr;
  grid-template-rows: repeat(10, auto) 1fr;
  width: 90%;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 5%;
  h1 {
    text-align: center;
  }
`;

export default Grid;
