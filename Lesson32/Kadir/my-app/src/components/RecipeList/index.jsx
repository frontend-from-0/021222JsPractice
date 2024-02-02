export const RecipeList = ({recipes}) => {

    return(
        <div>
            <h2>Search Results</h2>
            <ul>
              {
             recipes.map(recipe => <li key={recipe.idMeal} >{recipe.strMeal}</li>)   
              }
            </ul>
        </div>
    )
}