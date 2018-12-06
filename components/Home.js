import React, { Component } from 'react';
import CenteredDiv from './styles/CenteredDiv';
import styled from 'styled-components';

const HomeImage = styled.img`
  width: 25%;

  @media screen and (max-width: 1300px) {
    width: 80%;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

class Home extends Component {
  render() {
    return (
      <CenteredDiv>
        <HomeImage src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953385/artwork/artist-portfolio/ph4.jpg" />
      </CenteredDiv>
    );
  }
}

export default Home;
