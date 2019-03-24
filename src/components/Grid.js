import React from 'react';
import styled from 'styled-components';
import Elements from './Elements';
import GitHub from '../imgs/github.svg';

const Grid = props => {
  return (
    <Wrapper>
      <h1>Periodic Table</h1>
      <GridLayout>
        <Elements />
      </GridLayout>
      <div>
        <h1>{props.name}</h1>
      </div>
      <div>
        <HeaderInfo>
          <p>Contact Me</p>
          <a
            href="https://github.com/emwp/periodic-table"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="GitHub" />
          </a>
        </HeaderInfo>
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
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.7vw;

  img {
    width: 3vw;
    transition: 0.3s ease-out;
  }

  img:hover,
  img:active {
    filter: invert(0.3);
  }
`;

export default Grid;
