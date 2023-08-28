import React from 'react';
import { StyledButton, StyledInput, Form} from './style_searchbar';

export const Searchbar = ({ changeQuery }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newQuery = evt.target.elements.query.value;
    changeQuery(newQuery);
    // evt.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledButton type="submit">
        <span>Search</span>
      </StyledButton>

      <StyledInput
        name="query"
        type="text"
        placeholder="Search images and photos"
      />
    </Form>
  );
};
