import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import styled from 'styled-components';

const Elements = () => {
  const [element, setElement] = useState({});
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(active);
  });

  const setElementOnClick = e => {
    e.preventDefault();
    let num = parseInt(e.target.innerText) - 1;
    setElement(data.elements[num]);
    if (num + 1 === element.number || active === false) {
      setActive(!active);
    }
  };
  let displayInfo;

  if (active) {
    displayInfo = (
      <ElementInfo>
        <div>
          <div className="title">
            <h3>{element.name}</h3>
            <a href={element.source} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
          <div className="element_details">
            {element.boil ? <p>Boil: {element.boil} K</p> : null}
            {element.melt ? <p>Melt: {element.melt} K</p> : null}
            {element.atomic_mass ? (
              <p>Atomic Mass: {element.atomic_mass.toFixed(1)}</p>
            ) : null}
            {element.density ? (
              <p>
                Density: {element.density} g/cm<sup>3</sup>
              </p>
            ) : null}
          </div>
          <p>{element.summary}</p>
        </div>
      </ElementInfo>
    );
  }
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
      {displayInfo}
    </React.Fragment>
  );
};

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
  }

  .element_number {
    font-size: 0.7vw;
    display: flex;
    position: absolute;
    width: inherit;
    height: inherit;
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

const ElementInfo = styled.div`
  grid-column: 3 / 13;
  grid-row: 2 / 4;
  padding: 0 0.5vw;
  overflow-y: scroll;
  text-align: center;
  max-height: 10vw;
  font-size: 1.2vw;
  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    margin: 0.5vw 0 0 0;
  }
  div.element_details {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #7c7729;
    font-size: 1.1vw;
  }
  div.title {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  div.title h3 {
    margin-right: 2vw;
  }
`;

export default Elements;
