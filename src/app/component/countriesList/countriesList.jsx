"use client"

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '@/redux/slices/countrySlice';

import CountryCardHomePage from '../countryCard/countryCardHomePage';

import Link from 'next/link';

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
    <div className={HomePageCountryCardsStyle.HomePageContainer}>
      {filteredCountries.map((country) => (
        <Link key={country.cca2} href={`/countries/${country.cca2}`}>
          <CountryCardHomePage country={country}/>
        </Link>
      ))}
    </div>
  );
}

const HomePageCountryCardsStyle = {
  HomePageContainer: 'grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-[60px] md:grid-cols-3 md:gap-x-[60px] md:gap-y-[80px] xl:grid-cols-4',
}