import React, { Component } from "react";
import Modal from "./Modal";
import styled from "styled-components";

const StyledAnchor = styled.a`
  padding: 0;
  margin: 0;
  border: none;
  justify-content: center;
  align-items:: center;

  img {
    width: 30%;
  }
`;

class Image extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <div>
          <Modal
            show={this.state.show}
            handleClose={this.hideModal}
            imageURL={
              "https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa7.jpg"
            }
          />
          <StyledAnchor onClick={this.showModal}>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa7.jpg" />
          </StyledAnchor>
        </div>
        <div>
          <Modal
            show={this.state.show}
            handleClose={this.hideModal}
            imageURL={
              "https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa4.jpg"
            }
          />
          <StyledAnchor onClick={this.showModal}>
            <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa4.jpg" />
          </StyledAnchor>
        </div>
      </main>
    );
  }
}

export default Image;
