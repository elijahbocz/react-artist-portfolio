import React from 'react';
import Image from './Image';
import styled from 'styled-components';

const StyledModal = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    position: fixed;
    background: white;
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
`;

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'display-block' : 'display-none';

  return (
    <StyledModal>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    </StyledModal>
  );
};

export default Modal;
