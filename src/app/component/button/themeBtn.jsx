"use client"
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faSolidMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faRegularMoon } from '@fortawesome/free-regular-svg-icons';


export default function ThemeBtn() {
	const [showIcon, setShowIcon] = useState(false);

	useEffect(() => {
		if (showIcon) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [showIcon]);
	return (
		<>
			{
				showIcon ? (

					<FontAwesomeIcon 
						icon={faRegularMoon} 
						className={styleThemeBtn.themeIconRegular}
						onClick={() => setShowIcon(false)}
					/>
				) : (

					<FontAwesomeIcon 
						icon={ faSolidMoon} 
						className={styleThemeBtn.themeIconSolid}
						onClick={() => setShowIcon(true)}
					/>
				)
			}
		</>
	)
}

const styleThemeBtn = {
  themeIconSolid: 'text-baseSize text-WhiteDarkModeTextnLightModeElements cursor-pointer',
	themeIconRegular: 'text-baseSize text-VeryDarkBlueLightModeText cursor-pointer',
}