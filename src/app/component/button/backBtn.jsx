
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

export default function BackBtn() {
  return (
    // back to home page
    <Link href={`/`}>
      <div className={styleLeftArrow.arrowContainer}>
        <FontAwesomeIcon 
            icon={faArrowLeftLong} 
            className={styleLeftArrow.leftArrow}
          />
        <p className={styleLeftArrow.backText}>Back</p>  
      </div>
    </Link>
  )
}

const styleLeftArrow= {
  arrowContainer: 'w-52 md:w-30 lg:w-28 px-4 md:px-3 py-5 md:py-3 cursor-pointer flex justify-center items-center gap-5 md:gap-3 bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements shadow-colorShadow rounded',
  leftArrow: 'text-3xl md:text-lg text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText',
  backText: 'text-xl md:text-sm text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText',
}