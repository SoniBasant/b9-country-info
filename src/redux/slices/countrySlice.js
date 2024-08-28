import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// thunk action to fetch countries
export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  // fetch all countries, filter later
  return response.data;
})

// Define the initial state
const initialState = {
  countries: [], // Example state
  loading:false,
  error: null,
  searchTerm: "", // search term state
  filteredCountries: [], // state for filtered countries using search bar
  region: '', // state for selected region
  // Add other initial state properties as needed
};

// Create the slice
const countrySlice = createSlice({
  name: 'country',
  initialState,
  
  // Add other reducers as needed
  reducers: {
    // for filtering by name using search bar input
    setSearchTerm(state, action) {
      state.searchTerm = action.payload; //update search term in state

      // filter countries based on search term
      state.filteredCountries = state.countries.filter((country) => 
        country.name.common.toLowerCase().includes(action.payload.toLowerCase())
      );
    },

    // for filtering by region using dropdown input
    setRegion(state, action) {
      state.region = action.payload;
      state.filteredCountries = state.countries.filter((country) => 
        country.region === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
        state.filteredCountries = action.payload; //initialize filtered countries
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export actions
export const { setSearchTerm, setRegion } = countrySlice.actions;

// Export the reducer
export default countrySlice.reducer;
