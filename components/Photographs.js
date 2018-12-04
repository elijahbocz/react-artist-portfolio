import React, { Component } from 'react';
import MasonryDiv from './styles/Masonry';

class Sculptures extends Component {
  render() {
    return (
      <MasonryDiv>
        <div className="columns">
          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953385/artwork/artist-portfolio/ph4.jpg" />
            {/* <figcaption>
            Cinderella wearing European fashion of the mid-1860’s
          </figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953384/artwork/artist-portfolio/ph3.jpg" />
            {/* <figcaption>Rapunzel, clothed in 1820’s period fashion</figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953384/artwork/artist-portfolio/ph2.jpg" />
            {/* <figcaption>Belle, based on 1770’s French court fashion</figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953383/artwork/artist-portfolio/ph6.jpg" />
            {/* <figcaption>Mulan, based on the Ming Dynasty period</figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953384/artwork/artist-portfolio/ph7.jpg" />
            {/* <figcaption>
            Sleeping Beauty, based on European fashions in 1485
          </figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953383/artwork/artist-portfolio/ph5.jpg" />
            {/* <figcaption>
            Pocahontas based on 17th century Powhatan costume
          </figcaption> */}
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953384/artwork/artist-portfolio/ph1.jpg" />
            {/* <figcaption>
            Snow White, based on 16th century German fashion
          </figcaption> */}
          </figure>
        </div>
      </MasonryDiv>
    );
  }
}

export default Sculptures;