
import ThemeBtn from '../button/themeBtn'

export default function Header() {
  return(
    <header className={headerStyle.headerContainer}>
      <p className="text-WhiteDarkModeTextnLightModeElements font-bold dark:text-VeryDarkBlueLightModeText">
        Where in the world?
      </p>
      <div className={headerStyle.themeContainer}>
        <ThemeBtn/>
        <p className="text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText">
          Dark Mode
        </p> 
      </div>
    </header>
  )
}

const headerStyle = {
  headerContainer: 'z-10 py-7 px-4 px-31 w-full flex items-center justify-between flex-row text-sm bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements',
  themeContainer: 'flex flex-row gap-3 items-center'
}