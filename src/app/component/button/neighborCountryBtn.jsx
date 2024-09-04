"use client";

import axios from 'axios';
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function NeighborCountryBtn({ cca3 }) {
  const [countryData, setCountryData] = useState('null');

  useEffect(() => {
    async function fetchCountryData() {
      try {
        const res = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`);
        console.log(res.data);

        if (res.data && res.data.length > 0) {
          setCountryData(res.data[0]);
        } else {
          console.error('No data found for the country code:', cca3);
          setCountryData({ name: { common: 'Unknown'}, cca3: '#'});
        }
      } catch (err) {
        console.log('error fetching country name:', err);
        setCountryData({ name: { common: 'Error' }, cca3: '#' });
      }
    }

    fetchCountryData();
  }, [cca3]);
  
  return (
    <Link key={cca3} href={`/countries/${countryData && countryData.cca3 ? countryData.cca3 : '#'}`}>
      <button type='button' className={neighborCountryStyle.neighborCountryBtn}>
        {countryData && countryData.name ? countryData.name.common : 'Loading...'}
      </button>
    </Link>
  )
}

const neighborCountryStyle = {
  neighborCountryBtn: 'min-w-2 w-full bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText px-5 py-2 shadow rounded',
};
