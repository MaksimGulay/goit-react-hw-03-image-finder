import React from 'react';

export const Searchbar = ({ changeQuery }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newQuery = evt.target.elements.query.value;
    changeQuery(newQuery);
    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        name="query"
        type="text"
        placeholder="Search images and photos"
      />
    </form>
  );
};
