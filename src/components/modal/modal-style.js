import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  border-radius: 20px;
  
`;

export const ModalImage = styled.img`
  max-width: 800px;
  max-height: 600px;
  border-radius: 20px;
`;
