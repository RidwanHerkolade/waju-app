import Nav from './Component/NavBar/Nav';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Board from './Component/Board/Board';
import Charts from './Component/Chart/Charts';
import Aim from './Component/Aim/Aim'
// import Aim from './Component/About/Aim/Aim';
import Drop from './Component/Drop/Drop';
import Footer from './Component/Footer/Footer'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './App.css';


import React from "react";


function App() {
  return (
      <div className="App">
           <div className='header__display'>
                <Nav/>
               <Header/>
               <Board/>
               <About/>
               <Aim/>
               <Drop/>
               <Charts/>   
               <Footer/>     
           </div>
          
      </div>
  );
}

export default App;
