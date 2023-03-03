import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css'
//import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Navbar.css';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
