import React, { Component } from 'react';
import MasonryDiv from './styles/Masonry';

class Sculptures extends Component {
  render() {
    return (
      <MasonryDiv>
        <div className="columns">
          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953385/artwork/artist-portfolio/ph4.jpg" />
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953384/artwork/artist-portfolio/ph3.jpg" />
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953384/artwork/artist-portfolio/ph2.jpg" />
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953383/artwork/artist-portfolio/ph6.jpg" />
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953384/artwork/artist-portfolio/ph7.jpg" />
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953383/artwork/artist-portfolio/ph5.jpg" />
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953384/artwork/artist-portfolio/ph1.jpg" />
          </figure>
        </div>
      </MasonryDiv>
    );
  }
}

export default Sculptures;