import React from 'react';

const Weather = ({ country, weather }) => {
  return (
    <>
      <h2>Weather in {country.capital}</h2>
      <h3>
        temperature:{' '}
        <span style={{ fontWeight: 'normal' }}>
          {weather.current.temperature} Celcius
        </span>
      </h3>
      <img
        style={{ width: '50px', height: '50px' }}
        src={weather.current.weather_icons}
        alt="weather_icon"
      />
      <h3>
        wind:{' '}
        <span style={{ fontWeight: 'normal' }}>
          {weather.current.wind_degree} mph direction {weather.current.wind_dir}
        </span>
      </h3>
    </>
  );
};

export default Weather;
