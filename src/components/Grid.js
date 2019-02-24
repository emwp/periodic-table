import React from 'react';
import styled from 'styled-components';
import Elements from './Elements';

const Grid = props => {
  return (
    <Wrapper>
      <h1>Periodic Table</h1>
      <div>
        <HeaderInfo>
          <p>
            Made by{' '}
            <a
              href="https://emwp.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Everton Pereira
            </a>
          </p>
          <a
            href="https://github.com/emwp/periodic-table"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"> Source Code</i>
          </a>
        </HeaderInfo>
      </div>
      <GridLayout>
        <Elements />
      </GridLayout>
      <div>
        <h1>{props.name}</h1>
      </div>
    </Wrapper>
  );
};

const GridLayout = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(17, auto) 1fr;
  grid-template-rows: repeat(9, auto) 1fr;
  width: 90%;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 5%;
  h1 {
    font-size: 3vw;
    text-align: center;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.7vw;
`;

export default Grid;
