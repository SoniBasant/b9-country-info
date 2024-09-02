"use client"

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '@/redux/slices/countrySlice';

import CountryCardHomePage from '../countryCard/ccHomePage';

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
    <div className={HomePageStyle.HomePageContainer}>
      {filteredCountries.map((country) => (
        <Link key={country.cca2} href={`/countries/${country.cca2}`}>
          <CountryCardHomePage country={country}/>
        </Link>
      ))}
    </div>
  );
}

const HomePageStyle = {
  HomePageContainer: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10",
}