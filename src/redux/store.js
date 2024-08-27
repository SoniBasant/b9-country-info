import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './slices/countrySlice';
import themeSlice from './slices/themeSlice';

// Configure the store
const store = configureStore({
  reducer: {
    country: countrySlice,
    theme: themeSlice,
  },
});

export default store;
