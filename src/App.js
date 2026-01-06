import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from '../src/components/header/Header'
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Modal from './components/modal/Modal';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import BookServiceHero from './components/bookServiceHero/BookServiceHero';
import AboutUs from './components/about/Aboutus';
import CompanyStats from './components/companyStats/CompanyStats';
import Reviews from './components/reviews/Reviews';
import RequestPage from './pages/RequestPage';
import Brands from './components/Brands/Brands';
import ContactSection from './components/contactSection/ContactSection';
import CallButton from './components/callButton/CallButton';

function App() {
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const reviewRef = useRef(null);
  const serviceRef = useRef(null)
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header 
        aboutRef={aboutRef} 
        faqRef={faqRef} 
        reviewRef={reviewRef} 
        serviceRef={serviceRef}
        open={open} 
        setOpen={setOpen} 
        close={close} 
        setClose={setClose} 
        scrolled={scrolled} 
      />
      <CallButton></CallButton>
      {/* {open && <Modal open={open} setOpen={setOpen} />} */}
      <main className='appContent'>
        <Routes>
          <Route path="/" element={
            <>
              <Hero></Hero>
              <BookServiceHero />
              <Brands></Brands>
              <Services ref={serviceRef} />
              <CompanyStats />
              <AboutUs ref={aboutRef} />
              <Reviews ref={reviewRef} />
              <Faq ref={faqRef} />
              <ContactSection></ContactSection>
              <Footer />
            </>
          } />
          <Route path="/requestPage" element={<RequestPage />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
