import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBio = styled.div`
  margin: 0;
  margin-top: 1.3rem;
  padding: 0 5rem 1rem 5rem;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  letter-spacing: 0.1rem;

  .section-one {
    display: flex;
    padding: 0;
  }

  .section-one-p {
    padding: 0 1rem;
  }

  .section-one img {
    width: 100%;
  }

  .section-two {
    padding-top: 1rem;
  }

  .section-two img {
    padding: 1rem;
    width: 50%;
  }

  @media (max-width: 1300px) {
    font-size: 0.75rem;
    display: inline;

    .section-one img {
      width: 100%;
    }

    .section-two img {
      width: 70%;
    }
  }
`;

class Bio extends Component {
  render() {
    return (
      <StyledBio>
        <div className="section-one">
          <div className="section-one-p">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              facilis a magni expedita sit, itaque placeat corporis, ratione
              ducimus quis iste. Fuga voluptatum autem libero. Harum deserunt
              fugiat ad dicta.
            </p>
          </div>
          <div className>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1544027295/artwork/artist-portfolio/artist1.jpg" />
          </div>
        </div>
        <div className="section-two">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui
            aliquid tempore, perspiciatis soluta vel.
          </p>
          <div className="sections-image">
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1544027295/artwork/artist-portfolio/artist.jpg" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            fugiat natus accusamus ut porro laudantium, ad, eos sint blanditiis
            itaque temporibus quo aliquid dicta cupiditate, quia placeat quas.
            Earum cum tenetur et facere iure aliquam.
          </p>
        </div>
      </StyledBio>
    );
  }
}

export default Bio;
