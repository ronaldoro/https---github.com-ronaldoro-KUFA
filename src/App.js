import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AnimatePresence} from "framer-motion";
import MainPage from './views/MainPage.tsx';
import AboutPage from './views/AboutPage.tsx';
import CommunicationPage from './views/CommunicationPage.tsx';

function App() {
  return (
    <div className="App">
      <MainPage />
      <AboutPage />
      <CommunicationPage />
      
      <Router>
        <AnimatePresence>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
