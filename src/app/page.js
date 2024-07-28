// import Image from "next/image";

import Header from './component/header/header'
import Search from './component/searchBar/searchInput'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-VeryDarkBlueDarkModeBackground dark:bg-VeryLightGrayLightModeBackground">
      <Header />
      <Search />
    </main>
  );
}
