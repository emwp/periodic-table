import React, { Component } from 'react';
import data from '../data/data.json';
import styled from 'styled-components';
import Info from './Info';

class Elements extends Component {
  state = {
    element: {},
    focus: false
  };

  render() {
    const setElementOnClick = e => {
      e.preventDefault();
      let num = parseInt(e.target.innerText) - 1;
      this.setState({ element: data.elements[num], focus: !this.state.focus });
    };

    return (
      <React.Fragment>
        {data.elements.map(el => {
          let xpos = el.xpos;
          let ypos = el.ypos;
          let category;

          if (el.category === 'alkaline earth metal') {
            category = '#F3F300';
          } else if (
            el.category === 'noble gas' ||
            el.category === 'unknown, predicted to be noble gas'
          ) {
            category = '#88AAFF';
          } else if (
            el.category === 'alkali metal' ||
            el.category === 'unknown, but predicted to be an alkali metal'
          ) {
            category = '#FFAA00';
          } else if (
            el.category === 'transition metal' ||
            el.category === 'unknown, probably transition metal'
          ) {
            category = '#DD9999';
          } else if (el.category === 'diatomic nonmetal') {
            category = '#00EE00';
          } else if (el.category === 'polyatomic nonmetal') {
            category = '#00EE00';
          } else if (
            el.category === 'post-transition metal' ||
            el.category === 'unknown, probably post-transition metal'
          ) {
            category = '#11DDBB';
          } else if (
            el.category === 'metalloid' ||
            el.category === 'unknown, probably metalloid'
          ) {
            category = '#00EE00';
          } else if (el.category === 'lanthanide') {
            category = '#FFAA88';
          } else if (el.category === 'actinide') {
            category = '#EACBE0';
          }
          return (
            <Element
              key={el.name}
              style={{
                gridRowStart: ypos,
                gridColumnStart: xpos,
                background: category
              }}
              onClick={e => setElementOnClick(e)}
            >
              <div className="element_symbol">{el.symbol}</div>
              <div className="element_number">{el.number}</div>
            </Element>
          );
        })}
        ,
        <Info
          style={{
            gridColumnStart: '4',
            gridRowStart: '3'
          }}
          name={this.state.element.name}
          summary={this.state.element.summary}
        />
      </React.Fragment>
    );
  }
}

const Element = styled.div`
  cursor: pointer;
  width: 5vw;
  height: 5vw;
  border: 1px solid #3a3a38;
  border-collapse: collapse;
  overflow: hidden;
  font-size: 1rem;
  font-weight: bold;
  display: flex;

  &:hover {
    background: white !important;
    border-color: 888888;
    /* color: white; */
  }

  .element_number {
    font-size: 0.7vw;
    display: flex;
    position: absolute;
    width: inherit;
    height: inherit;
    /* margin-top: 0;
    margin-left: 0; */
  }
  .element_symbol {
    position: absolute;
    font-size: 2vw;
    display: flex;
    width: inherit;
    height: inherit;
    justify-content: center;
    align-items: center;
  }
`;

export default Elements;
