import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import ProductSolution from './pages/ProductSolution';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Banner from './components/Banner';
import MotorInsurance from './pages/MotorInsurance';
import TravelInsurance from './pages/TravelInsurance';


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
          <Route path='/motor' element={<MotorInsurance />} />
          <Route path='/travel' element={<TravelInsurance />} />
        </Routes>
        <Banner />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
