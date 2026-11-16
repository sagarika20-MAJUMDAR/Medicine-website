import { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import ProductDetail from './Pages/ProductDetail';
import Contact from './Pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar setCurrentPage={setCurrentPage} />
      <main style={{ flex: 1 }}>
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'product' && <ProductDetail />}
        {currentPage === 'contact' && <Contact/>}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}