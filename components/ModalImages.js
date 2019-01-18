import React, { Component } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
  }

  .modal-main {
    position: fixed;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  img {
    width: 70%;
  }
`;

class ModalImages extends Component {
  render() {
    return <div />;
  }
}

export default ModalImages;
