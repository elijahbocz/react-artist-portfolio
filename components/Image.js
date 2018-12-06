import React, { Component } from 'react';
import Modal from './Modal';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;

  img {
    width: 100%;
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
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <StyledButton type="button" onClick={this.showModal}>
          <img src="https://res.cloudinary.com/elijahboatscloud/image/upload/v1543953365/artwork/artist-portfolio/pa7.jpg" />
        </StyledButton>
      </main>
    );
  }
}

export default Image;
