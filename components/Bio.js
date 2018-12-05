import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBio = styled.div`
  margin: 0;
  margin-top: 1.3rem;
  padding: 0;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  letter-spacing: 0.1rem;

  img {
    width: 50%;
  }
`;

class Bio extends Component {
  render() {
    return (
      <StyledBio>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          facilis a magni expedita sit, itaque placeat corporis, ratione ducimus
          quis iste. Fuga voluptatum autem libero. Harum deserunt fugiat ad
          dicta.
        </p>
        <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1544027295/artwork/artist-portfolio/artist1.jpg" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui
          aliquid tempore, perspiciatis soluta vel.
        </p>
        <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1544027295/artwork/artist-portfolio/artist.jpg" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          fugiat natus accusamus ut porro laudantium, ad, eos sint blanditiis
          itaque temporibus quo aliquid dicta cupiditate, quia placeat quas.
          Earum cum tenetur et facere iure aliquam.
        </p>
      </StyledBio>
    );
  }
}

export default Bio;
