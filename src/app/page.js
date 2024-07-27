// import Image from "next/image";

import Header from './component/header/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-VeryDarkBlueDarkModeBackground dark:bg-VeryLightGrayLightModeBackground">
      <Header />
    </main>
  );
}
