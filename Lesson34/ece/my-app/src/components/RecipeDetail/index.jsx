import { useEffect, useState } from 'react';
import './styles.css';

export const RecipeDetail = ({ recipe }) => {
	const [ingredients, setIngredients] = useState([]);
	useEffect(() => {
		// According to the documentation, the max amount of ingredients is 20
		const maxAmountOfIngredients = 20;
		const ingredientsTemp = [];
		for (let i = 1; i <= maxAmountOfIngredients; i++) {
			const ingredientKey = `strIngredient${i}`;
			const measureKey = `strMeasure${i}`;
			const ingredient = recipe[ingredientKey];
			const measure = recipe[measureKey];

			if (ingredient.trim().length > 0 || measure.trim().length > 0) {
				ingredientsTemp.push(`${measure} ${ingredient}`);
			}
		}
		setIngredients(ingredientsTemp);
	}, []);

	return (
		<div className='recipe-detail-container'>
			<h2>{recipe.strMeal}</h2>
			<img className='recipe__image' src={recipe.strMealThumb} alt={recipe.strMeal} />
			<h3>INGREDIENTS</h3>
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient}>{ingredient}</li>
				))}
			</ul>
		</div>
	);
};
