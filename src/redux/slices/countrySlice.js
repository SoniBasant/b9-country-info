import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  countries: [], // Example state
  // Add other initial state properties as needed
};

// Create the slice
const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
    },
    // Add other reducers as needed
  },
});

// Export actions
export const { setCountries } = countrySlice.actions;

// Export the reducer
export default countrySlice.reducer;
