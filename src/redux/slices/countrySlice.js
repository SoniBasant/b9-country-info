import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  searchTerm: "", //new search term state
  // Add other initial state properties as needed
};

// Create the slice
const countrySlice = createSlice({
  name: 'country',
  initialState,
  
  // Add other reducers as needed
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload; //update search term in state
    }
  },
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

// export actions
export const { setSearchTerm } = countrySlice.actions;

// Export the reducer
export default countrySlice.reducer;
