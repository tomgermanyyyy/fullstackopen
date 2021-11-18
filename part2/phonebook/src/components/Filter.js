import React from 'react';

const Filter = ({ searchText, handleSearchTextChange }) => {
  return (
    <form>
      filter shown with{' '}
      <input type="text" value={searchText} onChange={handleSearchTextChange} />
    </form>
  );
};

export default Filter;
