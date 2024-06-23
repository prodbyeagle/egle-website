import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Application from './pages/Application';
import Contact from './pages/Contact';
import './color.css';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <Router>
      <Analytics mode="auto" debug={true} />
      <SpeedInsights />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Application />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;