import React from 'react';
import './App.scss';
import Routes from './routes'
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header/>
      <Routes/>
      <Footer/>
    </>
  );
}

export default App;
