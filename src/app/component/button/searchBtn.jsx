"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBtn() {
  return (
    <>
      <FontAwesomeIcon 
        icon={faMagnifyingGlass} 
        style={styleSearchBtn.searchIconSolid}
      />
    </>
  )
}

const styleSearchBtn= {
  searchIconSolid: 'text-baseSize text-DarkGrayLightModeInput'
}