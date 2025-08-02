import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';

import AboutUs from './pages/aboutUs';
import Home from './pages/home';
import Verticals from './pages/OurVerticals';
import ContactUs from './pages/ContactUs'
import Footer from './component/footer';
import './App.css'



function App() {
  return (
    
      <div style={{ paddingTop: '4rem' }}> {/* Offset for fixed navbar */}
      
        <Navbar />

        <Routes>
          
<Route path='/' element={<Home/>}/>
<Route path='/aboutUs' element={<AboutUs/>}/>
<Route path='/Verticals' element={<Verticals/>}/>
<Route path='/contact' element={<ContactUs/>}/>

        </Routes>

        <Footer/>
        
      </div>

  );
}

export default App;