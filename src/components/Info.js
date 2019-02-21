import React from 'react';
import styled from 'styled-components';

const Info = props => {
  return (
    <WrapperInfo>
      <h1>{props.name}</h1>
      <p>{props.summary}</p>
    </WrapperInfo>
  );
};

const WrapperInfo = styled.div`
  grid-column: 3 / 17;
  grid-row: 11 / 18;
  /* margin: 0 10px; */
  /* width: 49vw;
  height: 9vw; */

  box-sizing: border-box;
`;

export default Info;
