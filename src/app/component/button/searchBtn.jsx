"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBtn() {
  return (
    <>
      <FontAwesomeIcon 
        icon={faMagnifyingGlass} 
        className={styleSearchBtn.searchIconSolid}
        // className='text-baseSize dark:text-Grey text-red '
      />
    </>
  )
}

const styleSearchBtn= {
  searchIconSolid: 'text-baseSize text-WhiteDarkModeTextnLightModeElements dark:text-Grey'
}