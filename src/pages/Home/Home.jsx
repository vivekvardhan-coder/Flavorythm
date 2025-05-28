import React from 'react';
import Menu from '../Menu/Menu';
import Hero from '../../components/Hero';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Menu />
    </div>
  );
};

export default Home;