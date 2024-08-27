// this file define how your theme state will be managed.

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  isDarkMode: false, // Initial theme state, 'false' for light mode and 'true' for dark mode
  // Add other initial state properties as needed
};

// Create the slice
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      // state.theme = state.theme === 'light' ? 'dark' : 'light';
      state.isDarkMode = !state.isDarkMode; // Toggle between light and dark mode
    },
    // Add other reducers as needed
  },
});

// Export actions
export const { toggleTheme } = themeSlice.actions;

// Export the reducer
export default themeSlice.reducer;
