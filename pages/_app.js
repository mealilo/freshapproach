import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps}) {
  return (
    <>
      <div>
        <Header />
        <Component {...pageProps} />   
        <Footer />
      </div>
    </>
  )
}
