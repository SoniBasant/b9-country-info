// "use client"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '@/redux/slices/countrySlice';

export default function CountriesList() {
  const dispatch = useDispatch();
  const { countries, loading, error } = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
      {countries.map((country) => (
        <div key={country.cca3} className="bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText rounded shadow">
          <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-full max-h-40 object-fit rounded-t mb-2" />
          <h2 className="text-xl font-bold mb-2 ml-2">{country.name.common}</h2>
          <p className='ml-2'><span className='font-bold'>Population:</span> {country.population.toLocaleString()}</p>
          <p className='ml-2'><span className='font-bold'>Region:</span> {country.region}</p>
          <p className='ml-2 mb-8'><span className='font-bold'>Capital:</span> {country.capital ? country.capital[0] : 'N/A'}</p>
        </div>
      ))}
    </div>
  );
}