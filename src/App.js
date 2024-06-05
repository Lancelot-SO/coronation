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
import Insights from './pages/Insights';
import HomeInsurance from './pages/HomeInsurance';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hero' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/insights' element={<Insights />} />
          <Route path='/products' element={<ProductSolution />} />
          <Route path='/motor' element={<MotorInsurance />} />
          <Route path='/travel' element={<TravelInsurance />} />
          <Route path='/home_insurance' element={<HomeInsurance />} />
        </Routes>
        <Banner />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
