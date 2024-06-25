import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Caro from './Components/Carousel/Carousel';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Todo from './Components/Todo/Todo';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup/Signup';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App(){
  return(
    <Router>
       <div>
        <Navbar />
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Signup" element={<Signup/>}/>
         </Routes>
       </div>
    </Router>
  )
}

function Home() {
  return (
   
    <div>
        
        
        <Caro/>
        <Services/>
        <About/>
        <Contact/>
      
         <Todo/> 
         <Footer/>
    </div>
    
);
}

export default App;
