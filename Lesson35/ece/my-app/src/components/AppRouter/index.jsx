import { Routes, Route } from 'react-router-dom';
import {NewRecipeForm} from '../NewRecipeForm';
import { RecipeList } from '../RecipeList';
import { SearchBar } from '../SearchBar';
import { Card } from '../Card';

export const AppRouter = ({recipes, setRecipes}) => {
  return (
    <Routes>
    {/* <Route path="/about" element={<div>About us page</div>} />
    <Route path="/contact" element={<div>Contact us page</div>} />
    <Route path="/items">
      <Route path="/items/new" element={<Item />}/>
      <Route path="/items/:id" element={<Item />}/>
      <Route path="/items" element={<div>All items</div> }/>
    </Route>
    <Route path="/" element={<div>Home page</div>} /> */}
    <Route path="/recipes/new" element={<NewRecipeForm />}/>
    {/* Add a route for each recipe (path="/recipes/:id") */}
    <Route path="/" element={
      <Card>
        <SearchBar setRecipes={setRecipes} />
        <RecipeList recipes={recipes}/>
	    </Card>
    } />
  </Routes>
  )
};