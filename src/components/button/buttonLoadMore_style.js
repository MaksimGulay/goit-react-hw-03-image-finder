import styled from 'styled-components'

export const ButtonContainer = styled.div`
display: flex;
justify-content: center`

export const ButtonStyle = styled.button`
display:flex;
justify-content: center;
padding: 20px;
background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`