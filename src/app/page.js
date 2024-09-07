
"use client"

import Search from './component/searchBar/searchBar'
import Dropdown from './component/dropdown/dropdown'
import CountriesList from './component/countriesList/countriesList'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>title: 'REST API for Countries'</title>
        <meta 
          name="description"
          content="Generated by create next app, ReactJS, RESTful api, countries information, tailwind for style, axios for api, Redux for state management, Redux-Thunk Middleware for Asynchronous operations(API)"
        />
      </Head>
      <div className={HomePageStyle.mainContainer}>
        <div className={HomePageStyle.inputContainer}>
          <Search />
          <Dropdown />
        </div>
        <CountriesList />
      </div>
    </>
  );
} 

const HomePageStyle = {
  mainContainer: 'px-5 sm:px-8 md:px-20 py-8 md:py-12 flex flex-col gap-y-8 md:gap-y-12',
  inputContainer: 'flex justify-between flex-col gap-y-8 md:flex-row md:gap-x-4',
}