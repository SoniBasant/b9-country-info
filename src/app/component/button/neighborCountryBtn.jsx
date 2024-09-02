

export default function NeighborCountryBtn({ country }) {
  return (
    <button class={neighborCountryStyle.btn}>
      {country.name.common}
    </button>
  )
}

const neighborCountryStyle= {
  btn: 'bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements text-WhiteDarkModeTextnLightModeElements dark:text-Grey px-5 py-2',
}