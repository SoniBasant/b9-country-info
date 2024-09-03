import BackBtn from "../button/backBtn";
import NeighborCountryBtn from "../button/neighborCountryBtn";

export default function CountryInfoDetailPage({ countryData }) {
  
  return (
    <>
      <BackBtn/>
      <div className="p-4 flex flex-col md:flex-row">
        <img src={countryData.flags.png} alt={`${countryData.name.common} flag`} className="w-64 h-40 object-fit" />
        <div className="flex flex-col">
          <h2 className={DetailpageStyle.DetailPageHeading}>{countryData.name.common}</h2>
          <div className="flex flex-col md:flex-row">
            <div className={DetailpageStyle.DetailPageText}>
              <p><strong>Native Name:</strong> {countryData.name.common}</p>
              <p><strong>Population:</strong> {countryData.population.toLocaleString()} </p>
              <p><strong>Region:</strong> {countryData.region ? countryData.region : 'N/A'}</p>
              <p><strong>Sub Region:</strong> {countryData.subregion ? countryData.subregion : 'N/A'}</p>
              <p><strong>Capital:</strong> {countryData.capital ? countryData.capital : 'N/A'}</p>
            </div>
            <div className={DetailpageStyle.DetailPageText}>
              <p><strong>Top Level Domain:</strong> {countryData.tld ? countryData.tld : 'N/A'}</p>
              <p><strong>Currencies:</strong> {countryData.currencies ? Object.values(countryData.currencies)[0].name : 'N/A'}</p>
              <p><strong>Language:</strong> {countryData.languages ? Object.values(countryData.languages).join(", ") : 'N/A'}</p>
            </div>
          </div>
          <>
            <p className={DetailpageStyle.DetailPageText}><strong>Border Countries:</strong></p>
           
            <div >
              <p className={DetailpageStyle.Borders}>
                {countryData.borders?.length > 0 ? (
                  (countryData.borders).map((cca3) => (
                    <NeighborCountryBtn key={cca3} cca3={cca3}/>
                  )) 
                ) : (
                  'N/A'
                  )}
              </p>
            </div>
          </>
        </div>
      </div>
    </>
  )
}

const DetailpageStyle = {
  DetailPageHeading: "text-3xl font-bold text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText mt-4",
  DetailPageText: "text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText",
  Borders: "grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center"
}