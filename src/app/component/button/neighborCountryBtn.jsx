"use client";

import axios from 'axios';

import { useEffect, useState } from "react";

export default function NeighborCountryBtn({ cca3 }) {
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    async function fetchCountryName() {
      try {
        const res = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`);
        console.log(res.data);

        if (res.data && res.data.length > 0) {

          setCountryName(res.data[0].name.common);
        } else {
          console.error('No data found for the country code:', cca3);
          setCountryName('Unknown');
        }
      } catch (err) {
        console.log('error fetching country name:', err);
        setCountryName('Error');
      }
    }

    fetchCountryName();
  }, [cca3]);
  
  return (
    <button className={neighborCountryStyle.btn}>
      {countryName ? countryName : 'Loading...'}
    </button>
  )
}

const neighborCountryStyle = {
  btn: 'bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements text-WhiteDarkModeTextnLightModeElements dark:text-Grey px-5 py-2 rounded',
};
