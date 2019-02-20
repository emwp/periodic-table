import React from "react";
import data from "../data/data.json";
import styled from "styled-components";

const Elements = () => {
  return (
    <React.Fragment>
      {data.elements.map((el, index) => {
        console.log(el.symbol);
        return <Element>{el.symbol}</Element>;
      })}
    </React.Fragment>
  );
};

const Element = styled.div`
  cursor: pointer;
  width: 5vw;
  height: 5vw;
  padding: 2px;
  border: 1px solid #333333;
  border-collapse: collapse;
  overflow: hidden;
`;

export default Elements;
