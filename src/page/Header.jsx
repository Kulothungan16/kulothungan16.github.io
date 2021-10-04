import React from 'react';
import styled, { keyframes } from 'styled-components';

const Header = () => (
  <Container>
    <H2>
      Hey there! <Span>👋</Span>,
    </H2>
    <H1>I'm Kulothungan.</H1>
  </Container>
);

const Container = styled.div``;

const H1 = styled.h1`
  font-size: 90px;
  font-family: 'Arvo', serif;
  font-weight: bold;
  display: inline-block;
  transition: color 0.25s ease-in;

  &:hover {
    color: dodgerblue;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const H2 = styled.h2`
  font-size: 40px;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const wave = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`;

const Span = styled.span`
  animation-name: ${wave}; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
`;

export default Header;