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
  grid-template-areas:
    'H null null null null null null null null null null null null null null null null He'
    'Li Be null null null null null null null null null null B C N O F Ne'
    'Na Mg null null null null null null null null null null Al Si P S Cl Ar'
    'K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr'
    'Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe'
    'Cs Ba La Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn'
    'Fr Ra Ac Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'
    'null null null Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu'
    'null null null Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr';
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 5%;
  h1 {
    text-align: center;
  }
`;

export default Grid;
