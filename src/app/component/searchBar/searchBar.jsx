"use client"

import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setSearchTerm } from '@/redux/slices/countrySlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import useDebounce from '@/hooks/useDebounce';

export default function SearchBar() {
  // redux dispatch
  const dispatch = useDispatch();

  // local state for the input
  const [input, setInput] = useState('');

  // inputs for debouncing function
  // useDebounce need two inputs; value of input and delay
  const debouncedInput = useDebounce(input, 500);

  // handle input change
  const handleChange = (e) => {
    setInput(e.target.value); //update local state
  }

  // dispatch action when debounced input changes
  useEffect(() => {
    if(debouncedInput) {
      dispatch(setSearchTerm(debouncedInput));
    }
  }, [debouncedInput, dispatch]);

  return(
    <div className={searchBarStyle.searchContainer}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={searchBarStyle.searchIconSolid} />
      <input 
        type="text" 
        placeholder='Search for a country...' 
        className={searchBarStyle.searchInputStyle}
        value={input}
        onChange={handleChange}
        />
    </div>
  )
}

const searchBarStyle= {
  searchContainer: 'w-full max-w-[250px] flex gap-3 justify-start items-center bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements p-3 shadow rounded',
  searchIconSolid: 'text-baseSize text-WhiteDarkModeTextnLightModeElements dark:text-Grey',
  searchInputStyle: 'placeholder-VeryLightGrayLightModeBackground dark:placeholder-DarkGrayLightModeInput bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements text-WhiteDarkModeTextnLightModeElements dark:text-DarkBlueDarkModeElements text-belowSize outline-none',
}