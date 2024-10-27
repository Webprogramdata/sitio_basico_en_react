import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

/**Esquema basico de pagina con
 * header, cuerpo principal, footer.
 *  utilizando React-Router
 * 
 */
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage name="David"/>} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

