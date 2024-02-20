import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './App/Pages/Order/index.jsx';
import Order from './App/Pages/Order/index.jsx';
import Menu from './App/Pages/Menu/index.jsx';
import Stats from './App/Pages/Stats/index.jsx';
import Settings from './App/Pages/Setting/index.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Orders />} />
          <Route path='/Orders' element={<Orders />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Stats' element={<Stats />} />
          <Route path='/Settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
