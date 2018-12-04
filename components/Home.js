import React, { Component } from 'react';
import CenteredDiv from './styles/CenteredDiv';
import styled from 'styled-components';

const HomeImage = styled.img`
  width: 50%;
`;

class Home extends Component {
  render() {
    return (
      <CenteredDiv>
        <HomeImage src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa4.jpg" />
      </CenteredDiv>
    );
  }
}

export default Home;
