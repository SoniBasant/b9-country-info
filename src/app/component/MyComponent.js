"use client"
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/slices/themeSlice';
import { setCountries } from '../../redux/slices/countrySlice';

function MyComponent() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const countries = useSelector((state) => state.country.countries);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleSetCountries = () => {
    dispatch(setCountries(['USA', 'Canada', 'Mexico']));
  };

  return (
    <div>
      <h1>Theme: {theme}</h1>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
      <button onClick={handleSetCountries}>Set Countries</button>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
