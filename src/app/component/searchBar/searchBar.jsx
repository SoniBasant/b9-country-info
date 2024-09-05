"use client"

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setSearchTerm } from '@/redux/slices/countrySlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function SearchBar() {
  // redux dispatch
  const dispatch = useDispatch();

  // local state for the input
  const [input, setInput] = useState('');

  // handle input change
  const handleChange = (e) => {
    setInput(e.target.value); //update local state
    dispatch(setSearchTerm(e.target.value)) //dispatch action to redux
  }

  return(
    <div className={styleSearch.searchContainer}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styleSearch.searchIconSolid} />
      <input 
        type="text" 
        placeholder='Search for a country...' 
        className={styleSearch.searchInputStyle}
        value={input}
        onChange={handleChange}
        />
    </div>
  )
}

const styleSearch= {
  searchContainer: 'w-full max-w-[250px] flex gap-3 justify-start items-center bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements p-3 rounded',
  searchIconSolid: 'text-baseSize text-WhiteDarkModeTextnLightModeElements dark:text-Grey',
  searchInputStyle: 'placeholder-VeryLightGrayLightModeBackground dark:placeholder-DarkGrayLightModeInput bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements text-WhiteDarkModeTextnLightModeElements dark:text-DarkBlueDarkModeElements text-belowSize outline-none',
}