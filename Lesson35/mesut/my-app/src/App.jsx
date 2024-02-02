import { SearchBar } from './components/SearchBar';
import { useEffect, useState } from 'react';
import { BD_SEARCH_BASE_URL } from './urls';
import { Card } from './components/Card';
import { Navbar } from './components/Navbar';
import  {AppRouter} from './components/AppRouter';

import './App.css';

export const App = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch(BD_SEARCH_BASE_URL)
			.then((response) => response.json())
			.then((data) => {
				if (data.meals) return setRecipes(data.meals);
			})
			.catch(() => setRecipes([]));
	}, []);

	

	return (
		<div className='app-container'>
			<Navbar
				showGoBack={true}
			/>
			<header>
				<h1>Recipe Search App</h1>
			</header>
			<AppRouter recipes={recipes} setRecipes={setRecipes} />
		</div>
	);
};
