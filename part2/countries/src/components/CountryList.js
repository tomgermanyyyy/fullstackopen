import React from 'react';

const CountryList = ({ countries, setCountryToShow }) => {
  return countries.map((country) => (
    <div key={country.ccn3}>
      <span>{country.name.common}</span>{' '}
      <button type="button" onClick={() => setCountryToShow(country)}>
        show
      </button>
    </div>
  ));
};

export default CountryList;
