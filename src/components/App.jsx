import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';
import Header from './Header';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import WhatIDo from './WhatIDo';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('theme-light', theme === 'light');
    root.classList.toggle('theme-dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>
      <Header />
      <Hero />
      <WhatIDo />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />

      <div className="change-theme-btn">
        <button
          className="theme-button toggle-btn theme-toggle"
          onClick={toggleTheme}
          id="themeToggle"
          type="button"
        >
          <span className="dark-span">Dark</span>
          <span className="light-span">Light</span>
        </button>
      </div>

      <div className="backto-top" onClick={scrollToTop} role="button" tabIndex={0}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-up"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default App;
