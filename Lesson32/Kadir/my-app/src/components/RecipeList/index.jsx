import "./styles.css";
import { useState } from "react";

export const RecipeList = ({ recipes, handleRecipeSelect, selectedRecipe }) => {
  
    const [isActive, setIsActive] = useState(false);
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
            onClick={toggleClick() ? () => handleRecipeSelect(recipe): setIsActive('false')}
            style={{
              backgroundColor:
                selectedRecipe && selectedRecipe.idMeal === recipe.idMeal
                  ? "lightblue" // Background color of the clicked item
                  : "", // Background color of other items, its empty because ı did it color in other component
            }}
          >
            {recipe.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};