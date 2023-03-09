import './index.css';

import ParamRoute from '/src/routes/ParamRoute';
import TestRoute from '/src/routes/TestRoute';
import WildcardRoute from '/src/routes/WildcardRoute';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('App') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="" element={<div>HelloWorld</div>} />
        <Route path="/test" element={<TestRoute />} />
        <Route path="/param/:param" element={<ParamRoute />} />
        <Route path="/wildcard/*" element={<WildcardRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
