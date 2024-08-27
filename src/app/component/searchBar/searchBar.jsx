
import SearchBtn from '../button/searchBtn'
import SearchInput from '../searchInput/searchInput'

export default function SearchBar() {
  return(
    <div className='flex gap-3 justify-start align-center 
      bg-DarkBlueDarkModeElements 
      dark:bg-WhiteDarkModeTextnLightModeElements
      p-3 rounded'>
      <SearchBtn />
      <SearchInput/>
    </div>
  )
}