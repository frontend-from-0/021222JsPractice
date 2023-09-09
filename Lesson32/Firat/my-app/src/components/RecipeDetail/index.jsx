import "./styles.css";

export const RecipeDetail = ({ selectedRecipe }) => {
  const getIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      const ingredient = selectedRecipe[ingredientKey];
      const measure = selectedRecipe[measureKey];

      if (!ingredient || !measure) {
        break;
      }
      ingredients.push(`${measure} ${ingredient}`);
    }
    return ingredients;
  };
  const recipeIngredients = getIngredients();
  return (
    <div className="recipeBoard">
      <div className="recipe-detail">
        <h2>{selectedRecipe.strMeal.toUpperCase()}</h2>
        <img src={selectedRecipe.strMealThumb} alt="" />
      </div>
      <div className="recipe-detail">
        <h2>INGREDIENTS</h2>
        <ul>
          {recipeIngredients.map((ingredient, index) => (
            <li className="ingredient" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
