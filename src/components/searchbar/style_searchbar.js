// searchbar_style.js
import styled from 'styled-components';

export const Form = styled.form`
display: flex;
justify-content: center;
padding-top: 40px;
padding-bottom: 20px;`

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px 0 0 10px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 0 10px 10px 0px;
  width: 200px;
  margin-right: 8px;
`;
