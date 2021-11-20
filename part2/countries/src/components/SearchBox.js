import React from 'react';

const SearchBox = ({ searchText, handleSearchText }) => {
  return (
    <>
      <label for="search">find countries </label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchText}
        onChange={handleSearchText}
      />
    </>
  );
};

export default SearchBox;
