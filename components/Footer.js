import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
`;

class Footer extends Component {
  render() {
    return (
      <div>
        <StyledFooter>
          <p>Footer</p>
        </StyledFooter>
      </div>
    );
  }
}

export default Footer;
