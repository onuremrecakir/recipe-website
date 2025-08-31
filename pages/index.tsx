import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import RecipeCard from '../components/RecipeCard';
import { fetchRandomRecipe, Recipe } from '../lib/api';

export default function Home() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);

  const loadRandomRecipe = async () => {
    setLoading(true);
    setError(null);
    setShowInstructions(false);
    
    try {
      const randomRecipe = await fetchRandomRecipe();
      if (randomRecipe) {
        setRecipe(randomRecipe);
      } else {
        setError('Failed to load recipe. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while loading the recipe.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandomRecipe();
  }, []);

  return (
    <>
      <Head>
        <title>Recipe Finder</title>
        <meta name="description" content="Discover delicious recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="container">
          {loading && (
            <div className="loading">
              <p>Loading a delicious recipe...</p>
            </div>
          )}
          
          {error && (
            <div className="error">
              <p>{error}</p>
              <button onClick={loadRandomRecipe} className="retry-button">
                Try Again
              </button>
            </div>
          )}
          
          {recipe && !loading && (
            <>
              <RecipeCard 
                recipe={recipe} 
                showInstructions={showInstructions}
                onToggleInstructions={() => setShowInstructions(!showInstructions)}
              />
              <div className="button-container">
                <button onClick={loadRandomRecipe} className="new-recipe-button">
                  Show Another Recipe
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
} 