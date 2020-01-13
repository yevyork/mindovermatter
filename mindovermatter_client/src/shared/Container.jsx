import React from "react";
import './styles/Container.css'
import Header from './Header'
import Footer from './Footer'
import Routes from '../routes'

function Container() {

  return (
    <div className='main'>
      <Header />
      <div className='line'></div>
      <Routes />
      <Footer />
    </div>
  );
}

export default Container;
