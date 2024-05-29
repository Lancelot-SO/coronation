import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import ProductSolution from './pages/ProductSolution';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Banner from './components/Banner';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hero' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<ProductSolution />} />
        </Routes>
        <Banner />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
