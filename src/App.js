import React from 'react';
import './App.css';
import './CV.css';
import './Portafolio.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortafolioMenuPage from './pages/PortafolioMenuPage';
import AboutMePage from './pages/AboutMePage';
import ContactMePage from './pages/ContactMePage';
import LogosDisplayPage from './pages/LogosDisplayPage';
import AdvertisingPage from './pages/AdvertisingPage';
import IllustrationsPage from './pages/IllustrationsPage';
import VideosPage from './pages/VideosPage';
import UiUxPage from './pages/UiUxPage';
import WebAppPage from './pages/WebAppPage';
import { Container } from 'reactstrap';
import { Routes, Route } from 'react-router-dom';



function App () {
  return (
    <div className='App'>
      <Header />
      <Container className='Body'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/portafolio' element={<PortafolioMenuPage />} />
          <Route path='/aboutme' element={<AboutMePage />} />
          <Route path='/contactme' element={<ContactMePage />} />
          <Route path='/logos' element={<LogosDisplayPage />} />
          <Route path='/advertising' element={<AdvertisingPage />} />
          <Route path='/illustrations' element={<IllustrationsPage />} />
          <Route path='/videos' element={<VideosPage />} />
          <Route path='/uiux' element={<UiUxPage />} />
          <Route path='/webapp' element={<WebAppPage />} />
        </Routes>
        <Container className='pushFooter'></Container>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
