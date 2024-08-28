// import Image from "next/image";
"use client"
import { Provider } from 'react-redux';
import store from '../redux/store';

import Header from './component/header/header'
import Search from './component/searchBar/searchBar'
import Dropdown from './component/dropdown/dropdown'
import CountriesList from './component/countries/countriesList'

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col bg-VeryDarkBlueDarkModeBackground dark:bg-VeryLightGrayLightModeBackground">
        <Header />
        <div className='px-10 py-5 flex flex-col gap-y-8'>
          <div className='flex justify-between flex-col gap-y-8 sm:flex-row'>
            <Search />
            <Dropdown />
          </div>
          <CountriesList />
        </div>
      </main>
    </Provider>
  );
} 
