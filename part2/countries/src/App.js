import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CountryToShow, CountryList, SearchBox } from './components';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [countryToShow, setCountryToShow] = useState(null);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    setCountryToShow(null);
  };

  useEffect(() => {
    console.log('effect');
    const fetchCountriesData = async () => {
      if (searchText !== '') {
        const res = await axios.get(`https://restcountries.com/v3.1/all`);
        const filteredCountries = res.data.filter((country) =>
          country.name.common.toLowerCase().includes(searchText.toLowerCase())
        );
        console.log(filteredCountries);
        setCountries(filteredCountries);
      }
    };
    fetchCountriesData();
  }, [searchText]);

  return (
    <div>
      <SearchBox searchText={searchText} handleSearchText={handleSearchText} />
      {countries.length > 10 && <p>Too many matches, specify another filter</p>}
      {1 < countries.length && countries.length <= 10 && (
        <CountryList
          countries={countries}
          setCountryToShow={setCountryToShow}
        />
      )}
      {countries.length === 1 && <CountryToShow country={countries[0]} />}
      {countryToShow && <CountryToShow country={countryToShow} />}
    </div>
  );
};

export default App;
