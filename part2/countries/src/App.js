import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSearchText = (e) => setSearchText(e.target.value);

  useEffect(async () => {
    console.log('effect');
    if (searchText !== '') {
      const res = await axios.get(`https://restcountries.com/v3.1/all`);
      const filteredCountries = res.data.filter((country) =>
        country.name.common.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(filteredCountries);
      setCountries(filteredCountries);
    }
  }, [searchText]);

  return (
    <div>
      <label for="search">find countries </label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchText}
        onChange={handleSearchText}
      />
      {countries.length > 10 && <p>Too many matches, specify another filter</p>}
      {1 < countries.length &&
        countries.length <= 10 &&
        countries.map((country) => (
          <p key={country.ccn3}>{country.name.common}</p>
        ))}
      {countries.length === 1 && (
        <div>
          <h1>{countries[0].name.common}</h1>
          <p>capital {countries[0].capital}</p>
          <p>population {countries[0].population}</p>
          <h2>languages</h2>
          <ul>
            {Object.values(countries[0].languages).map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
          <img
            style={{ width: '100px', height: '100px' }}
            src={countries[0].flags.svg}
            alt="flag"
          />
        </div>
      )}
    </div>
  );
};

export default App;
