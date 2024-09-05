import BackBtn from "../button/backBtn";
import NeighborCountryBtn from "../button/neighborCountryBtn";

export default function CountryInfoDetailPage({ countryData }) {
  
  return (
    <div className={detailPageStyle.detailPageMainContainer}>
      <BackBtn/>
      <div className={detailPageStyle.flagNTextContainer}>
        <img src={countryData.flags.png} alt={`${countryData.name.common} flag`} className={detailPageStyle.flagImageDetailPage} />
        <div className={detailPageStyle.contentDetailPage}>
          <h2 className={detailPageStyle.headingDetailPage}>{countryData.name.common}</h2>
          <div className={detailPageStyle.countryInfoContainerDetailPage}>
            <div className={detailPageStyle.textDetailPage}>
              <p><strong>Native Name:</strong> {countryData.name.common}</p>
              <p><strong>Population:</strong> {countryData.population.toLocaleString()} </p>
              <p><strong>Region:</strong> {countryData.region ? countryData.region : 'N/A'}</p>
              <p><strong>Sub Region:</strong> {countryData.subregion ? countryData.subregion : 'N/A'}</p>
              <p><strong>Capital:</strong> {countryData.capital ? countryData.capital : 'N/A'}</p>
            </div>
            <div className={detailPageStyle.textDetailPage}>
              <p><strong>Top Level Domain:</strong> {countryData.tld ? countryData.tld : 'N/A'}</p>
              <p><strong>Currencies:</strong> {countryData.currencies ? Object.values(countryData.currencies)[0].name : 'N/A'}</p>
              <p><strong>Language:</strong> {countryData.languages ? Object.values(countryData.languages).join(", ") : 'N/A'}</p>
            </div>
          </div>
          <div className={detailPageStyle.borderCountryContainer}>
            <p className={detailPageStyle.textDetailPage}>
              <strong className="truncate md:mt-2">Border Countries:</strong>
            </p>
            
            <p className={detailPageStyle.bordersCountry}>
              {countryData.borders?.length > 0 
                ? (
                  (countryData.borders).map((cca3) => (
                    <NeighborCountryBtn key={cca3} cca3={cca3}/>
                  ))) 
                : 
                  ('N/A')
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const detailPageStyle = {
  detailPageMainContainer: 'mt-20 mb-10 md:mb-20 mx-14 xl:mx-20 flex flex-col gap-[8rem] md:gap-[5rem]',
  headingDetailPage: 'text-3xl font-bold text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText mt-4',
  textDetailPage: 'flex flex-col gap-9 md:gap-4 text-mediumSize text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText',
  bordersCountry: 'grid grid-cols-1 sm:grid-cols-2 lgmd:grid-cols-3 xl:grid-cols-4 gap-3 items-center justify-center text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText',
  flagImageDetailPage: 'w:full h-auto sm:max-w-[380px] sm:h-auto md:max-w-[420px] md:max-h-[300px] xl:max-w-[562px] xl:auto object-fit',
  flagNTextContainer: 'flex flex-col md:flex-row gap-24 md:gap-16 xl:gap-28',
  contentDetailPage: 'flex flex-col gap-16 md:gap-9',
  countryInfoContainerDetailPage: 'flex flex-col lg:flex-row gap-24 md:gap-20',
  borderCountryContainer: 'flex flex-col xl:flex-row gap-10 md:gap-4',
  buttonBorderCountry: 'grid grid-cols-3 lg:grid-col-4 gap-2',
}