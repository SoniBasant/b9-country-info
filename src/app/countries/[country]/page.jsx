// to handle dynamic routing based on country name or code

import axios from 'axios';

import CountryInfoDetailPage from '@/app/component/countryCard/countryInfoDetailPage'

export async function generateStaticParams() {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const countries = response.data;

  // Generate static params for each country
  return countries.map((country) => ({
    country: country.cca2, // or use cca3 or any other identifier
  }));
}

// Fetch data for each country
async function fetchCountryData(country) {
  const response = await axios.get(`https://restcountries.com/v3.1/alpha/${country}`);
  return response.data[0];
}

// Default export: Server Component
export default async function CountryDetail({ params }) {
  const { country } = params;
  const countryData = await fetchCountryData(country);

  return (
    <CountryInfoDetailPage countryData={countryData}/>
  );
}
