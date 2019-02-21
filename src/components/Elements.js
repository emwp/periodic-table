import React from 'react';
import data from '../data/data.json';
import styled from 'styled-components';

const Elements = () => {
  return (
    <React.Fragment>
      {data.elements.map(el => {
        let xpos = el.xpos;
        let ypos = el.ypos;
        if (el.category === 'alkaline earth metal') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'yellow'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'noble gas') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'grey'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'alkali metal') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'red'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'transition metal') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'white'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'diatomic nonmetal') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'blue'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'polyatomic nonmetal') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'green'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'post-transition metal') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'purple'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'metalloid') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'orange'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'lanthanide') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'salmon'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'actinide') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'purple'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'unknown, probably transition metal') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'white'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'unknown, probably post-transition metal') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'white'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'unknown, probably metalloid') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'red'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        } else if (el.category === 'unknown, predicted to be noble gas') {
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: 'black'
              }}
            >
              <div className="element_number">{el.number}</div>
              <div className="element_symbol">{el.symbol}</div>
            </Element>
          );
        }
        return null;
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
