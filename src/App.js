import React, { useState } from 'react';
import '../src/header.css';

export default function App() {
  const [city, setCity] = useState('');
  const [details, setDetails] = useState(null);
  const [error, setError] = useState('');

  const getData = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a552d2016beaf572672b3a25822fb6a9&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setDetails(data);
        setError('');
      } else {
        setError('City not found. Please enter a valid city name.');
        setDetails(null);
      }
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred. Please try again later.');
      setDetails(null);
    }

    setCity('');
  };

  return (
    <div className='w-full h-screen bg-[#57c0c2]'>
      <div className='max-w-[1320px] mx-auto ml-5'>
        <h1 className='text-4xl font-bold py-10 text-white'>Simple Weather App</h1>
        <form onSubmit={getData}>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='w-72 h-12 pl-3'
            placeholder='Enter the city name'
          />
          <button className='text-white bg-[#090238] w-20 h-12'>Submit</button>
        </form>
      </div>

      <div className='w-96 mx-auto bg-white shadow-lg mt-10 p-5'>
        {error ? (
          <div className='text-red-500 font-bold text-xl'>{error}</div>
        ) : details ? (
          <>
            <h3 className='font-bold text-xl'>{details.name}, {details.sys.country}</h3>
            <h2 className='font-bold text-3xl'>{details.main.temp}°C</h2>
            <img src={`http://openweathermap.org/img/w/${details.weather[0].icon}.png`} alt='Weather Icon' />
            <p>{details.weather[0].main}</p>
          </>
        ) : (
          'No Data Found'
        )}
      </div>
    </div>
  );
}
