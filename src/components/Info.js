import React from 'react';
import styled from 'styled-components';

const Info = props => {
  return (
    <WrapperInfo>
      <div>
        <h3>{props.name}</h3>
        <p>{props.summary}</p>
      </div>
    </WrapperInfo>
  );
};

const WrapperInfo = styled.div`
  grid-column: 3 / 13;
  grid-row: 2 / 4;
  padding: 0 0.5vw;
  overflow-y: scroll;
  text-align: center;
  max-height: 10vw;
  font-size: 1.2vw;
  h3 {
    margin-top: 0;
  }
`;

export default Info;
