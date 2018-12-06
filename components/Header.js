import React, { Component } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 1rem;
  text-align: center;
  padding: 1rem;
  position: relative;
  z-index: 2;
  a {
    color: #FCFFF5;
    text-decoration: none;
    text-transform: uppercase;
  }
  a:hover {
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    margin: 0;
    padding: 2rem 2rem 0 2rem;
    text-align: center;
  }

  @media (max-width: 700px) {
    padding: 2rem 2rem 0 2rem;
  }
`;

const StyledHeader = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Logo>
          <Link href="/">
            <a>Artist Name</a>
          </Link>
        </Logo>
        <Nav />
      </StyledHeader>
    );
  }
}

export default Header;
