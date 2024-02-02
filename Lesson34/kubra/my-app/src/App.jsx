import { SearchBar } from './components/SearchBar';
import { useEffect, useState } from 'react';
import { RecipeList } from './components/RecipeList';
import {RecipeDetail} from './components/RecipeDetail';
import { BD_SEARCH_BASE_URL } from './urls';
import { Card } from './components/Card';
import {ReactHookFormRegistrationForm} from './components/ReactHookFormRegistrationForm';

import './App.css';

export const App = () => {
	const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(undefined);

	useEffect(() => {
		fetch(BD_SEARCH_BASE_URL)
			.then((response) => response.json())
			.then((data) => {
				if (data.meals) return setRecipes(data.meals);
			})
			.catch((error) => setRecipes([]));
	}, []);

	return (
		<div className='app-container'>
			<header>
				{selectedRecipe ? <button className='header__back-button' onClick={() => setSelectedRecipe(null)}>Go back</button>:<></>}
				<h1>Recipe Search App</h1>
			</header>
			<Card>
				<ReactHookFormRegistrationForm />
			</Card>
			<Card>
				{!selectedRecipe ? <SearchBar setRecipes={setRecipes} />: <></>}
				{!selectedRecipe ? <RecipeList recipes={recipes} onRecipeClick={setSelectedRecipe}/>: <></>}
      	{selectedRecipe ? <RecipeDetail recipe={selectedRecipe} />:<></>}
			</Card>
		</div>
	);
};
