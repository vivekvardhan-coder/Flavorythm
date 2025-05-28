import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      navigate(`/meal/${text}`);
      setText('');
    }
  };

  return (
    <div id="hero">
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">Flavorythm</h1>
        <p className="hero-subtitle">Discover Amazing Recipes from Around the World</p>
      </div>
      
      <form id="myform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search for delicious recipes..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          <i className="ri-search-line"></i>
        </button>
      </form>
    </div>
  );
};

export default Hero;