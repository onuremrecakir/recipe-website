// Recipe Website API Integration

import axios from 'axios';

// Types for recipe data
export interface Recipe {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
  instructions?: string;
  readyInMinutes?: number;
  servings?: number;
}

// Spoonacular API functions
export const fetchRandomRecipe = async (): Promise<Recipe | null> => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_KEY;
    if (!apiKey) {
      console.error('Spoonacular API key not found');
      return null;
    }

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1&includeNutrition=false`
    );

    if (response.data && response.data.recipes && response.data.recipes.length > 0) {
      const recipeData = response.data.recipes[0];
      
      // Get detailed recipe info to extract ingredients
      const detailedResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeData.id}/information?apiKey=${apiKey}`
      );
      
      const detailedRecipe = detailedResponse.data;
      const ingredients = detailedRecipe.extendedIngredients?.map(
        (ingredient: any) => ingredient.original
      ) || [];

      return {
        id: recipeData.id,
        title: recipeData.title,
        image: recipeData.image,
        ingredients,
        instructions: detailedRecipe.instructions,
        readyInMinutes: detailedRecipe.readyInMinutes,
        servings: detailedRecipe.servings,
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching random recipe:', error);
    return null;
  }
};

// Placeholder for Edamam nutrition info (to be implemented later)
export const fetchNutritionInfo = async (recipeId: number): Promise<any> => {
  // TODO: Implement Edamam API integration
  console.log('Nutrition info feature coming soon...');
  return null;
}; 