
'use client'

// import { useSelector, useDispatch } from 'react-redux';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';


export default function BackBtn() {
  return (
    <div className={styleLeftArrow.arrowContainer}>
    
      <FontAwesomeIcon 
          icon={faArrowLeftLong} 
          className={styleLeftArrow.leftArrow}
        />
      <p className={styleLeftArrow.backText}>Back</p>  
    </div>
  )
}

const styleLeftArrow= {
  arrowContainer: 'w-20 cursor-pointer flex justify-center items-center gap-2 justify-content bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements mt-2 px-4 py-2',
  leftArrow: 'text-baseSize text-WhiteDarkModeTextnLightModeElements dark:text-Grey',
  backText: 'text-WhiteDarkModeTextnLightModeElements dark:text-Grey',
}