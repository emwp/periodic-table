import React from 'react';
import data from '../data/data.json';
import styled from 'styled-components';

const Elements = () => {
  return (
    <React.Fragment>
      {data.elements.map((el, index) => {
        return (
          <Element key={data.elements[index].name}>
            <div className="element_number">{el.number}</div>
            <div className="element_symbol">{el.symbol}</div>
          </Element>
        );
      })}
    </React.Fragment>
  );
};

const Element = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 0;
  margin: 0 0 0 0;
  width: 5vw;
  height: 5vw;
  border: 1px solid #333333;
  border-collapse: collapse;
  overflow: hidden;
  font-size: 1rem;
  display: flex;
  .element_number {
    font-size: 0.7vw;
    /* margin-top: 0;
    margin-left: 0; */
  }
  .element_symbol {
    position: absolute;
    font-size: 1.5vw;
    display: flex;
    width: inherit;
    height: inherit;
    justify-content: center;
    align-items: center;
  }
`;

export default Elements;
