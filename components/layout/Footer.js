import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  margin: 2rem;

  .socicon-twitter {
    color: #fcfff5;
    font-size: 16px;
    padding-right: 1rem;
  }

  .socicon-instagram {
    color: #fcfff5;
    font-size: 16px;
    padding-right: 1rem;
  }

  .socicon-facebook {
    color: #fcfff5;
    font-size: 16px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <div>
        <StyledFooter>
          <a href="https://twitter.com/" className="socicon-twitter" />
          <a href="https://instgram.com" className="socicon-instagram" />
          <a href="https://facebook.com" className="socicon-facebook" />
        </StyledFooter>
      </div>
    );
  }
}

export default Footer;
