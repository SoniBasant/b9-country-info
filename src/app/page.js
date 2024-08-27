// import Image from "next/image";
"use client"
import { Provider } from 'react-redux';
import store from '../redux/store';

import Header from './component/header/header'
import Search from './component/searchBar/searchInput'

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between bg-VeryDarkBlueDarkModeBackground dark:bg-VeryLightGrayLightModeBackground">
        <Header />
        <>
        <Search />
        </>
      </main>
    </Provider>
  );
}
