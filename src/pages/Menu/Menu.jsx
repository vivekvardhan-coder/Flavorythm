import { useEffect, useState } from 'react';
import FoodBox from '../../components/FoodBox';
import './Menu.css';

const Menu = () => {
  const [categories, setCategories] = useState([]);

  const displayFood = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();
    setCategories(data.categories);
  };

  useEffect(() => {
    displayFood();
  }, []);

  return (
    <section id="menu" className="modern-style">
      <h2 className="menu-title">Explore Categories</h2>
      <div id="categoryContainer">
        {categories.map(category => (
          <FoodBox key={category.idCategory} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Menu;