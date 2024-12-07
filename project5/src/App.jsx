import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Dwarka from './Components/Dwarka'; // make sure to import all your components
import PaschimVihar from './Components/PaschimVihar';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/dwarka" element={<Dwarka />} />
        <Route path="/paschimvihar" element={<PaschimVihar />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
