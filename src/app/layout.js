import { Nunito_Sans } from "next/font/google";
import "./globals.css";

// font awesome style
import '@fortawesome/fontawesome-svg-core/styles.css';

// fontawesome library provided by react
import './lib/fontawesome';

// import configuration of font awesome to modify configuration settings
import { config } from '@fortawesome/fontawesome-svg-core';

// Prevent Font Awesome from adding its CSS automatically
config.autoAddCss = false;


const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "REST API for Countries",
  description: "Generated by create next app, ReactJS, RESTful api, countries information, tailwind for style, axios for api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
