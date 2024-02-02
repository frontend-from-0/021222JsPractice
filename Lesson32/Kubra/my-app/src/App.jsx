import "./App.css";
import { SearchBar } from "./components/SearchBar";
import {useEffect, useState} from "react";
import {RecipeList} from "./components/RecipeList"
import {BD_SEARCH_BASE_URL } from "./urls";

export const App = () => {
  const [recipes, setRecipes]= useState([]);

  useEffect(() => {
    fetch(BD_SEARCH_BASE_URL )
    .then((response)=>response.json())
    .then(data => {
      if (data.meals) return setRecipes(data.meals);
    })
    .catch(error => setRecipes([]));
  }, []);
  
  return (
    <div className="container">
    <header>Recipe Search App</header>
    <SearchBar setRecipes={setRecipes}/>
    <RecipeList recipes={recipes} />
    
    </div>
  );
};
