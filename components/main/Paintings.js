import React, { Component } from 'react';
import MasonryDiv from '../styles/Masonry';

class Paintings extends Component {
  render() {
    return (
      <MasonryDiv>
        <div className="columns">
          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa6.jpg" />         
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa7.jpg" />
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa5.jpg" />
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa4.jpg" />
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa2.jpg" />
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa3.jpg" />
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953364/artwork/artist-portfolio/pa1.jpg" />
          </figure>
        </div>
      </MasonryDiv>
    );
  }
}

export default Paintings;
