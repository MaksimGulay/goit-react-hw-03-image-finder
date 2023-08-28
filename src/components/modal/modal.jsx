import React, { useEffect } from 'react';
import {ModalOverlay, ModalContent, ModalImage} from './modal-style';

export const Modal = ({ imageSrc, altText, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalImage src={imageSrc} alt={altText} />
      </ModalContent>
    </ModalOverlay>
  );
};


