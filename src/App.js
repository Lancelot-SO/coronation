import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import ProductSolution from './pages/ProductSolution';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import MotorInsurance from './pages/MotorInsurance';
import TravelInsurance from './pages/TravelInsurance';
import Insights from './pages/Insights';
import HomeInsurance from './pages/HomeInsurance';
import FirstInsightDetail from './insightDetails/FirstInsightDetail';
import Career from './pages/Career';
import SelfService from './pages/SelfService';
import Contact from './pages/Contact';
import HeroRed from './pages/HeroRed';
import AboutRed from './pages/AboutRed';
import ProductSolutionRed from './pages/ProductSolutionRed';
import InsightsRed from './pages/InsightsRed';
import CareerRed from './pages/CareerRed';
import ContactRed from './pages/ContactRed';
import SelfServiceRed from './pages/SelfServiceRed';
import MotorInsuranceRed from './pages/MotorInsuranceRed';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hero' element={<Hero />} />
          <Route path='/herored' element={<HeroRed />} />
          <Route path='/about' element={<About />} />
          <Route path='/aboutred' element={<AboutRed />} />
          <Route path='/insights' element={<Insights />} />
          <Route path='/insightsred' element={<InsightsRed />} />
          <Route path='/products' element={<ProductSolution />} />
          <Route path='/productred' element={<ProductSolutionRed />} />
          <Route path='/motor' element={<MotorInsurance />} />
          <Route path='/motorred' element={<MotorInsuranceRed />} />
          <Route path='/travel' element={<TravelInsurance />} />
          <Route path='/career' element={<Career />} />
          <Route path='/careerred' element={<CareerRed />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contactred' element={<ContactRed />} />
          <Route path='/selfservice' element={<SelfService />} />
          <Route path='/selfservicered' element={<SelfServiceRed />} />
          <Route path='/home_insurance' element={<HomeInsurance />} />
          <Route path='/first_insight' element={<FirstInsightDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
