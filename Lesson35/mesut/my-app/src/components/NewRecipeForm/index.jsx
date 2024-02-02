import { useForm } from 'react-hook-form';
import {Card} from '../Card';
import './styles.css';

export const NewRecipeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
      "idMeal": "",
      "strMeal": "",
      "strDrinkAlternate": '',
      "strCategory": "",
      "strArea": "",
  });

  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
  };

  return (
    <Card>
      <h2>Create New Recipe</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="meal-name" className="form-field">
          Name
        </label>
        <input
          id="meal-name"
          type="text"
          {...register('strMeal', { required: true, minLength: 4 })}
        />
        {errors.strMeal && <span style={{color: 'red' }}>Meal name is required</span>}

        <label htmlFor="category-select" className="form-field">
          Category
        </label>
        <select name="category" id="category-select" {...register('strCategory', { required: true})}>
          <option value="">Please choose a category</option>
          <option value="main">Main</option>
          <option value="side">Side</option>
        </select>
      
        {errors.strCategory && <span>Category is required</span>}

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};