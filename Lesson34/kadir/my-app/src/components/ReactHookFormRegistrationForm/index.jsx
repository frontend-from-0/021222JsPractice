import { useForm } from 'react-hook-form';
import './styles.css';

export const ReactHookFormRegistrationForm = () => {
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
    <>
      <h2>Create New Recipe</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="meal-name" className="form-field">
          Meal Name:
        </label>
        <input
          id="meal-name"
          type="text"
          {...register('strMeal', { required: true, minLength: 4 })}
        />
        {errors.strMeal && <span style={{color: 'red' }}>Meal name is required</span>}

        <label htmlFor="category-select" className="form-field">
          Meal category
        </label>
        <select name="category" id="category-select" {...register('strCategory', { required: true})}>
          <option value="">Please choose a category</option>
          <option value="main">Main</option>
          <option value="side">Side</option>
        </select>
      
        {errors.strCategory && <span>Category is required</span>}

        <label htmlFor="address" className="form-field">
          Address:
        </label>
        <textarea id="address" {...register('address', { required: true })} />
        {errors.address && <span>Address is required</span>}

        <label htmlFor="phoneNumber" className="form-field">
          Phone Number:
        </label>
        <input
          id="phoneNumber"
          type="tel"
          {...register('phoneNumber', { required: true })}
        />
        {errors.phoneNumber && <span>Phone number is required</span>}

        <div>
          <label htmlFor="subscribeNewsletter" className="form-field">
            Subscribe to Newsletter:
          </label>
          <input
            id="subscribeNewsletter"
            type="textarea"
            placeholder='Lentils - 100g, Water - 500ml'
            {...register('subscribeNewsletter')}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};