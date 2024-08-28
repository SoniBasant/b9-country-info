"use client"

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className={menuStyle.menuButtonStyle}>
          Filter by Region
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className={menuStyle.menuItemsStyle}
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className={menuStyle.menuItemStyle}
            >
              Africa
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className={menuStyle.menuItemStyle}
            >
              America
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className={menuStyle.menuItemStyle}
            >
              Asia
            </a>
          </MenuItem>
          {/* <form action="#" method="POST"> */}
            <MenuItem>
              <a
                href="#"
                className={menuStyle.menuItemStyle}
              >
                Europe
              </a>
            </MenuItem>
          {/* </form> */}
          <MenuItem>
            <a
              href="#"
              className={menuStyle.menuItemStyle}
            >
              Oceania
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}

const menuStyle = {
  menuItemStyle: 'block px-4 py-2 text-belowSize text-VeryLightGrayLightModeBackground dark:text-DarkGrayLightModeInput data-[focus]:bg-gray-100 data-[focus]:text-gray-900',
  menuItemsStyle: "absolute right-0 z-10 mt-1 w-full origin-top-right rounded-md bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",
  menuButtonStyle: "inline-flex justify-left gap-x-8 rounded-md bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements px-6 py-3 text-belowSize text-VeryLightGrayLightModeBackground dark:text-DarkGrayLightModeInput shadow-sm ring-inset ring-gray-300",
}