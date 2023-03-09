import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps}) {
  return (
    <SessionProvider session={pageProps.session}>
      <div>
        <Header />
        <Component {...pageProps} />   
        <Footer />
      </div>
    </SessionProvider>
  )
}
/* */
