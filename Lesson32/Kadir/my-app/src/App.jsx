import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { useEffect, useState } from "react";
import { RecipeList } from "./components/RecipeList";
import { BD_SEARCH_BASE_URL } from "./urls";
import { RecipeDetail } from "./components/RecipeDetail";

export const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState();


  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };



  useEffect(() => {
    fetch(BD_SEARCH_BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) return setRecipes(data.meals);
      })
      .catch((error) => setRecipes([]));
  }, []);

  const handleHomeClick = () => {
    setSelectedRecipe(null);
    setRecipes(recipes);
  };

  return (
    <div className="container">
      <header onClick={handleHomeClick}>Recipe Search App</header>
      <SearchBar setRecipes={setRecipes} />
      <RecipeList
        recipes={recipes}
        handleRecipeSelect={handleRecipeSelect}
        selectedRecipe={selectedRecipe}
      />
      {selectedRecipe ? (
        <RecipeDetail selectedRecipe={selectedRecipe} />
        ) : (
        <p>Select a recipe to view details.</p>
      )}
    </div>
  );
};
