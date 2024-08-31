// to handle dynamic routing based on country name or code

// generateStaticParams() > to define the dynamic 
// routes that should be statically generated at build 
// time.

// Used in the Next.js App Router only. It helps Next.js know which dynamic paths to 
// pre-render as static pages, improving performance 
// and enabling static generation for dynamic routes.


import axios from 'axios';

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
    <div className="p-4">
      <img src={countryData.flags.png} alt={`${countryData.name.common} flag`} className="w-64 h-40 object-cover" />
      <h1 className="text-3xl font-bold mt-4">{countryData.name.common}</h1>
      <p><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {countryData.region}</p>
      <p><strong>Capital:</strong> {countryData.capital ? countryData.capital[0] : 'N/A'}</p>
    </div>
  );
}
