
import ThemeBtn from '../button/themeBtn'

export default function Header() {
  return(
    <header className={headerStyle.headerContainer}>
      <p className={headerStyle.headingText}>
        Where in the world?
      </p>
      <div className={headerStyle.themeContainer}>
        <ThemeBtn/>
        <p className={headerStyle.themeBtnText}>
          Dark Mode
        </p> 
      </div>
    </header>
  )
}

const headerStyle = {
  headerContainer: 'z-10 py-4 md:py-7 px-5 sm:px-8 md:px-14 xl:px-20 w-full flex flex-row items-center justify-between text-sm bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements shadow',
  themeContainer: 'flex flex-row gap-0 sm:gap-1 md:gap-2 items-center justify-center',

  headingText: 'text-baseSize md:text-xl font-bold text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText',
  themeBtnText: 'text-mediumSize text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText',
}