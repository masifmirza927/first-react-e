import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from "./components/Footer"

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

function App() {
  return (
    <div className='app container'>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
