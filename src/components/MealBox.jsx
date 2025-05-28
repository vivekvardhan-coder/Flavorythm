import React from 'react';
import { Link } from 'react-router-dom';
import './MealBox.css';

const MealBox = ({ meal }) => {
  return (
    <div className="meal-box">
      <div className="meal-glow"></div>
      <img 
        src={meal.strMealThumb} 
        alt={meal.strMeal} 
        loading="lazy" 
        className="meal-image" 
      />
      <div className="meal-content">
        <h3 className="meal-title">
          {meal.strMeal.length > 30 ? meal.strMeal.slice(0, 30) + '...' : meal.strMeal}
        </h3>
      </div>
      <Link to={`/meal/${meal.idMeal}`} className="meal-link">
        <i className="ri-arrow-right-up-line"></i>
      </Link>
    </div>
  );
};

export default MealBox;