import React from 'react';
import { Recipe } from '../lib/api';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h1 className="recipe-title">{recipe.title}</h1>
      
      {recipe.image && (
        <div className="recipe-image-container">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="recipe-image"
          />
        </div>
      )}
      
      <div className="recipe-info">
        {recipe.readyInMinutes && (
          <p className="recipe-time">Ready in {recipe.readyInMinutes} minutes</p>
        )}
        {recipe.servings && (
          <p className="recipe-servings">Serves {recipe.servings} people</p>
        )}
      </div>
      
      <div className="recipe-ingredients">
        <h2>Ingredients</h2>
        <ul className="ingredients-list">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      
      {recipe.instructions && (
        <div className="recipe-instructions">
          <h2>Instructions</h2>
          <div 
            className="instructions-text"
            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
          />
        </div>
      )}
    </div>
  );
};

export default RecipeCard; 