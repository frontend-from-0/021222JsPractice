import { useState } from 'react';
import { BD_SEARCH_BASE_URL } from '../../urls';
import './styles.css';

export const SearchBar = ({ setRecipes }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = () => {
		console.log(BD_SEARCH_BASE_URL + searchQuery);
		fetch(BD_SEARCH_BASE_URL + searchQuery)
			.then((response) => response.json())
			.then((data) => {
				if (data.meals) return setRecipes(data.meals);
			})
			.catch((error) => setRecipes([]));
	};

	return (
		<form action='#' className='search-bar'>
			<input
				type='text'
				placeholder='Search for recepie'
				onChange={(e) => setSearchQuery(e.target.value)}
				className='search-bar__input'
			/>
			<input
				type='submit'
				value='Search'
				onClick={handleSearch}
				className='search-bar__button'
			/>
		</form>
	);
};
