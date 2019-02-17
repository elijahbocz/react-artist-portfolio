import React, { Component } from 'react';
import MasonryDiv from '../styles/Masonry';
import ModalImage from 'react-modal-image';

class Modal extends Component {
  render() {
    return (
      <MasonryDiv>
        <div className="columns">
          <figure>
            <ModalImage
              small={
                'https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953385/artwork/artist-portfolio/ph4.jpg'
              }
              large={
                'https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953385/artwork/artist-portfolio/ph4.jpg'
              }
              alt="test"
            />
          </figure>

          <figure>
            <ModalImage
              small={
                'https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953384/artwork/artist-portfolio/ph3.jpg'
              }
              large={
                'https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953384/artwork/artist-portfolio/ph3.jpg'
              }
              alt="test"
            />
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

export default Modal;
