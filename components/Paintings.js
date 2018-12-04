import React, { Component } from 'react';
import CenteredDiv from './styles/CenteredDiv';
import MasonryDiv from './styles/Masonry';

class Paintings extends Component {
  render() {
    return (
      <MasonryDiv>
        <div className="columns">
          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa6.jpg" />
            {/* <figcaption>
            Cinderella wearing European fashion of the mid-1860’s
          </figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa7.jpg" />
            {/* <figcaption>Rapunzel, clothed in 1820’s period fashion</figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa5.jpg" />
            {/* <figcaption>Belle, based on 1770’s French court fashion</figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa4.jpg" />
            {/* <figcaption>Mulan, based on the Ming Dynasty period</figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa2.jpg" />
            {/* <figcaption>
            Sleeping Beauty, based on European fashions in 1485
          </figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa3.jpg" />
            {/* <figcaption>
            Pocahontas based on 17th century Powhatan costume
          </figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953364/artwork/artist-portfolio/pa1.jpg" />
            {/* <figcaption>
            Snow White, based on 16th century German fashion
          </figcaption> */}
          </figure>
        </div>
      </MasonryDiv>
    );
  }
}

export default Paintings;
