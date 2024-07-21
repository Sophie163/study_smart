import './App.css';
import './custom.scss'
import './css/custom.min.css'

import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home"; 
import HomeFr from './pages/HomeFr';
import Tutors from './pages/Tutors';
import Planner from './pages/Planner';
import FAQ from './pages/FAQ';
import Timer from './pages/Timer';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/planner" element={<Planner />} /> 
        <Route path="/timer" element={<Timer />} /> 
        <Route path="/faq" element={<FAQ />} />    
        <Route path="/fr" element={<HomeFr />} />     
      </Routes>  
  
      </header>
    </div>
  );
}

export default App;