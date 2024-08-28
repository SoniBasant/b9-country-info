import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// thunk action to fetch countries
export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  // limit the results to 8 countries
  return response.data.slice(0, 8);
})

// Define the initial state
const initialState = {
  countries: [], // Example state
  loading:false,
  error: null,
  // Add other initial state properties as needed
};

// Create the slice
const countrySlice = createSlice({
  name: 'country',
  initialState,
  // reducers: {
  //   setCountries(state, action) {
  //     state.countries = action.payload;
  //   },
  // },
  // Add other reducers as needed
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions
// export const { setCountries } = countrySlice.actions;

// Export the reducer
export default countrySlice.reducer;
