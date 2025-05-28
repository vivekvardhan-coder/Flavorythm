import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodBox.css';

const FoodBox = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`food-box ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/category/${category.strCategory}`)}
    >
      <div className="food-box-glow"></div>
      <img 
        src={category.strCategoryThumb} 
        alt={category.strCategory} 
        loading="lazy" 
      />
      <p className="category-text">{category.strCategory}</p>
    </div>
  );
};

export default FoodBox;