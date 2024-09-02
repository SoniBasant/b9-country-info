"use client"

import { Nunito_Sans } from "next/font/google";
import "./globals.css";

// for icons
// font awesome style
import '@fortawesome/fontawesome-svg-core/styles.css';
// fontawesome library provided by react
import './lib/fontawesome';
// import configuration of font awesome to modify configuration settings
import { config } from '@fortawesome/fontawesome-svg-core';
// Prevent Font Awesome from adding its CSS automatically
config.autoAddCss = false;

// common components
// header
import Header from './component/header/header'

// redux
import { Provider } from 'react-redux';
import store from '../redux/store';

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
      <Provider store={store}>
        <Header />
        {children}
        </Provider>
      </body>
    </html>
  );
}
