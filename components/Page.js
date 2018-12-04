import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
  color: #fcfff5;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: rgb(25, 52, 65);
  background-image: linear-gradient(
    160deg,
    rgba(25, 52, 65, 1) 0%,
    rgba(25, 52, 65, 1) 33%,
    rgba(62, 96, 111, 1) 100%
  );
  height: 100%;
  margin: 0;
`;

const Inner = styled.div`
  max-width: ${`props => props.theme.maxWidth`};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: EBGaramond;
    src: url("https://fonts.googleapis.com/css?family=EB+Garamond|Roboto|Lato");
    /* format: ('woff2'); */
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: "EB Garamond", serif;
    font-size: 1.5rem;
    line-height: 1;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
