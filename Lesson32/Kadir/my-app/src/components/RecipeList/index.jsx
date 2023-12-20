import "./styles.css";
import { useState } from "react";

export const RecipeList = ({ recipes, handleRecipeSelect, selectedRecipe }) => {
  const [isActive, setIsActive] = useState(true);

  const toggleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="recipe-container">
      <h2>Search Results</h2>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li
            key={recipe.idMeal}
            onClick={() => {
              toggleClick();
              if (isActive) {
                handleRecipeSelect(recipe);
              } else {
                handleRecipeSelect(null);
              }
            }}
            style={{
              backgroundColor:
                selectedRecipe && selectedRecipe.idMeal === recipe.idMeal
                  ? "lightblue" // Background color of the clicked item
                  : "", // Background color of other items
            }}
          >
            {recipe.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};
