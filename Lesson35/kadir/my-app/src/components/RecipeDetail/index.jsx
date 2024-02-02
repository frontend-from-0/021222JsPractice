import { useEffect, useState } from 'react';
import { Card } from '../Card';

import './styles.css';

// Don't pass recipe prop to RecipeDetail component. Instead, get the recipe id from the url (as we did in the Item component) and use it to fetch the recipe data from the API. Use BD_GET_BY_ID_URL from the urls.js file to fetch the signle recipe details.
export const RecipeDetail = ({ recipe }) => {
	const [ingredients, setIngredients] = useState([]);

	useEffect(() => {
		if (recipe) {
			// According to the documentation, the max amount of ingredients is 20
			const maxAmountOfIngredients = 20;
			const ingredientsTemp = [];
			for (let i = 1; i <= maxAmountOfIngredients; i++) {
				const ingredientKey = `strIngredient${i}`;
				const measureKey = `strMeasure${i}`;
				const ingredient = recipe[ingredientKey];
				const measure = recipe[measureKey];

				if (ingredient && (ingredient.trim().length > 0 || measure.trim().length > 0)) {
					ingredientsTemp.push(`${measure} ${ingredient}`);
				}
			}
			setIngredients(ingredientsTemp);
		}
	}, []);

	return (
		<Card>
			<div className='recipe-detail-container'>
				<h2>{recipe.strMeal}</h2>
				<img
					className='recipe__image'
					src={recipe.strMealThumb}
					alt={recipe.strMeal}
				/>
				<h3>INGREDIENTS</h3>
				<ul>
					{ingredients.map((ingredient) => (
						<li key={ingredient}>{ingredient}</li>
					))}
				</ul>
			</div>
		</Card>
	);
};
