import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Show from './pages/Show';
import "./styleDesign.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home />} />
      <Route path= "/:id" element={<Show />} />
    </Routes>
    </BrowserRouter>
);