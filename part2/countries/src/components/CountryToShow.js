import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Weather from './Weather';

const CountryToShow = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await axios.get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`
      );
      console.log('weather', res.data);
      setWeather(res.data);
    };
    fetchWeatherData();
  }, [country.capital]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>Spoken languages</h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img
        style={{ width: '100px', height: '100px' }}
        src={country.flags.svg}
        alt="flag"
      />
      {weather && <Weather weather={weather} country={country} />}
    </div>
  );
};

export default CountryToShow;
