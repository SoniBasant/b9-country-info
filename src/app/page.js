// import Image from "next/image";
"use client"
import { Provider } from 'react-redux';
import store from '../redux/store';

import Header from './component/header/header'
import Search from './component/searchBar/searchBar'
import Dropdown from './component/dropdown/dropdown'

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col bg-VeryDarkBlueDarkModeBackground dark:bg-VeryLightGrayLightModeBackground">
        <Header />
        <div className='px-10 py-5 gap-y-8 flex justify-between flex-col sm:flex-row'>
          <Search />
          <Dropdown />
        </div>
      </main>
    </Provider>
  );
}
