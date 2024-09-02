// country card in home page

export default function CountryCardHomePage({ country }) {
  return (
    <div className={HomePageCardStyle.cardContainer}>
      <div class={HomePageCardStyle.cardImageContainer}>
        <img src={country.flags.png} alt={`${country.name.common} flag`} className={HomePageCardStyle.cardImage} />
      </div> 
      <h2 className={HomePageCardStyle.cardHeading}>{country.name.common}</h2>
      <p className={HomePageCardStyle.cardText}><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p className={HomePageCardStyle.cardText}><strong>Region:</strong> {country.region}</p>
      <p className={HomePageCardStyle.cardText}><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
    </div>
  )
}

const HomePageCardStyle = {
  cardContainer: "cursor-pointer bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText rounded shadow pb-8",
  cardImageContainer: "relative w-full min-h-20 max-h-64",
  cardImage: "absolute inset-0 w-full h-full object-fit",
  cardHeading: "text-xl font-bold mt-2 mb-2 ml-2",
  cardText: "ml-2",
}