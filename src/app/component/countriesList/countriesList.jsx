"use client"

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { FixedSizeGrid as Grid} from 'react-window';
import Link from 'next/link';

import { fetchCountries } from '@/redux/slices/countrySlice';
import CountryCardHomePage from '../countryCard/countryCardHomePage';


export default function CountriesList() {
  const dispatch = useDispatch();
  // use 'filteredCountries' from the Redux store
  const { filteredCountries, loading, error } = useSelector((state) => state.country);

  
  // Fetch countries when the component mounts
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return ( 
    <div className={homePageCountryCardsStyle.homePageContainer}>
      {filteredCountries.map((country) => (
        <Link key={country.cca2} href={`/countries/${country.cca2}`}>
          <CountryCardHomePage country={country}/>
        </Link>
      ))}
    </div>
  );
}

const homePageCountryCardsStyle = {
  homePageContainer: 'grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-[60px] md:grid-cols-3 md:gap-x-[60px] md:gap-y-[80px] xl:grid-cols-4',
}