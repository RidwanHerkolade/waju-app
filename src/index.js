import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Component/Route/Contact/Contact';
import Form from './Component/Route/Form/Form';
import Confirm from './Component/Route/Form/Confirm';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
       <Routes>
           <Route path="/" element={<App />} />
           <Route path="contact" element={<Contact/>} />
           <Route path="form" element={<Form/>} />
           <Route path="confirm" element={<Confirm/>} />
      </Routes>
  
  </BrowserRouter>,




document.getElementById('root'))