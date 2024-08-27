"use client"
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '@/redux/slices/themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faSolidMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faRegularMoon } from '@fortawesome/free-regular-svg-icons';


export default function ThemeBtn() {
	// Access the current theme from Redux state
	const isDarkMode = useSelector((state) => state.theme.isDarkMode);

	// Get the dispatch function from Redux
	const dispatch = useDispatch();

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDarkMode]);
	return (
		// <>
		// 	{
		// 		isDarkMode ? (

		// 			<FontAwesomeIcon 
		// 				icon={faRegularMoon} 
		// 				className={styleThemeBtn.themeIconRegular}
		// 				onClick={() => dispatch(toggleTheme())}
		// 			/>
		// 		) : (

		// 			<FontAwesomeIcon 
		// 				icon={ faSolidMoon} 
		// 				className={styleThemeBtn.themeIconSolid}
		// 				onClick={() => dispatch(toggleTheme())}
		// 			/>
		// 		)
		// 	}
		// </>
		<FontAwesomeIcon
      icon={isDarkMode ? faRegularMoon : faSolidMoon}
      className={isDarkMode ? styleThemeBtn.themeIconRegular : styleThemeBtn.themeIconSolid}
      onClick={() => dispatch(toggleTheme())}
    />
	)
}

const styleThemeBtn = {
  themeIconSolid: 'text-baseSize text-WhiteDarkModeTextnLightModeElements cursor-pointer',
	themeIconRegular: 'text-baseSize text-VeryDarkBlueLightModeText cursor-pointer',
}