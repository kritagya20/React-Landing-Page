import React from 'react';

import { Footer, Blog, Possibility, Courses, About, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <About />
    <Courses />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
