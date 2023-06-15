import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseEsc);
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseEsc);
    document.documentElement.style.overflow = 'auto';
  }

  handleCloseEsc = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { largeImg, tags, onClose } = this.props;
    return createPortal(
      <Overlay onClick={onClose}>
        <ModalDiv>
          <img src={largeImg} alt={tags} width="700" height="600" />
        </ModalDiv>
      </Overlay>,
      modalRoot
    );
  }
}
