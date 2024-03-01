import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './App/Pages/Order/index.jsx';
import Order from './App/Pages/Order/index.jsx';
import Menu from './App/Pages/Menu/index.jsx';
import Add from './App/Pages/Menu/AddMenu/index.jsx';
import Reservations from './App/Pages/Reservations/index.jsx';
import Stats from './App/Pages/Stats/index.jsx';
import Settings from './App/Pages/Setting/index.jsx';
import Notification from './App/Pages/Notification/index.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Orders />} />
          <Route path='/Orders' element={<Orders />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Add' element={<Add />} />
          <Route path='/Reservations' element={<Reservations />} />
          <Route path='/Stats' element={<Stats />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Notification' element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
