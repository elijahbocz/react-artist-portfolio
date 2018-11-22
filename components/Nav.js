import React, { Component } from 'react';
import Link from './ActiveLink';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link activeClassName="active" href="/">
      <a>Home</a>
    </Link>
    <Link activeClassName="active" href="/sculptures">
      <a>Sculptures</a>
    </Link>
    <Link activeClassName="active" href="/paintings">
      <a>Paintings</a>
    </Link>
    <Link activeClassName="active" href="/bio">
      <a>Bio</a>
    </Link>
    <Link activeClassName="active" href="/cv">
      <a>CV</a>
    </Link>
    <Link activeClassName="active" href="/contact">
      <a>Contact</a>
    </Link>
  </NavStyles>
);

export default Nav;
