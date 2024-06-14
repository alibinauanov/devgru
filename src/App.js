import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Programs from './pages/programs';
import Team from './pages/team';
import Contacts from './pages/contacts';
import InvestEdu from './pages/investEdu';
import Competition from './pages/competition';

import './i18n';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<About/>} />
          <Route path="/about" index element={<About/>} />
          <Route path="/programs" element={<Programs/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/investedu" element={<InvestEdu/>} />
          <Route path="/competition" element={<Competition/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}