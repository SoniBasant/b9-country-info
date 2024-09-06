"use client"

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { setRegion } from '@/redux/slices/countrySlice';

export default function Dropdown() {
  const dispatch = useDispatch();

  const handleRegionSelect = (region) => {
    // dispatch the action with selected region
    dispatch(setRegion(region));
  }
  return (
    <Menu as="div" className={menuStyle.dropdownContainer}>
      <MenuButton className={menuStyle.menuButtonStyle}>
        Filter by Region
        <ChevronDownIcon aria-hidden="true" className={menuStyle.downIcon} />
      </MenuButton>

      <MenuItems
        transition
        className={menuStyle.menuItemsContainerStyle}
      >
        <div className="py-1">
          {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (

            <MenuItem key={region}>
              <button onClick={() => handleRegionSelect(region)} className={menuStyle.menuItemStyle}>
                {region}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}

const menuStyle = {
  dropdownContainer: 'max-w-[181px] relative inline-block text-left shadow outline-none',
  menuButtonStyle: 'inline-flex justify-left gap-x-8 rounded-md bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements px-6 py-3 text-belowSize text-VeryLightGrayLightModeBackground dark:text-DarkGrayLightModeInput shadow-sm ring-inset ring-gray-300',
  downIcon: '-mr-1 h-5 w-5 text-gray-400',
  menuItemsContainerStyle: 'absolute right-0 z-10 mt-1 w-full origin-top-right rounded-md bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in',
  menuItemStyle: 'w-full flex flex-left px-4 py-2 text-belowSize text-VeryLightGrayLightModeBackground dark:text-DarkGrayLightModeInput data-[focus]:bg-gray-100 data-[focus]:text-gray-900',
}