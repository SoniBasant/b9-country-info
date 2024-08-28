
'use client'

import { useSelector, useDispatch } from 'react-redux';

// import LeftArrowIcon from '@/app/component/button/leftArrowIcon';

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
  arrowContainer: 'bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements',
  leftArrow: 'text-baseSize text-WhiteDarkModeTextnLightModeElements dark:text-Grey',
  backText: 'text-WhiteDarkModeTextnLightModeElements dark:text-Grey',
}