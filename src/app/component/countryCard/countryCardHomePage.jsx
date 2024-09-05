// country card in home page

export default function CountryCardHomePage({ country }) {
  return (
    <div className={HomePageCardStyle.cardContainer}>
      <div class={HomePageCardStyle.cardImageContainer}>
        <img src={country.flags.png} alt={`${country.name.common} flag`} className={HomePageCardStyle.cardImage} />
      </div> 
        <h2 className={HomePageCardStyle.cardHeading}>{country.name.common}</h2>
      <div className={HomePageCardStyle.cardContentHomePage}>
        <p className={HomePageCardStyle.cardText}><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p className={HomePageCardStyle.cardText}><strong>Region:</strong> {country.region}</p>
        <p className={HomePageCardStyle.cardText}><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      </div>
    </div>
  )
}

const HomePageCardStyle = {
  cardContainer: 'min-h-[380px] w-full xl:max-w-[266px] cursor-pointer bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText rounded shadow',
  cardImageContainer: 'relative overflow-hidden flex justify-center items-center w-full min-h-20 max-h-40 xs:max-w-full xs:h-[20rem] sm:max-w-full sm:h-[20rem] md:max-w-full md:h-[30rem] lg:max-w-full lg:h-[30rem] xl:max-w-[266px] xl:h-[162px]',
  cardImage: 'absolute inset-0 w-full h-full object-fit',
  cardHeading: 'text-lg font-bold mt-7 ml-6 xl:text-xl',
  cardText: 'text-mediumSize text-wrap',
  cardContentHomePage: 'flex flex-col pt-6 pl-6 pb-4 gap-2.5',
}