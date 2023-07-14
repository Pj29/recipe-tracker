import React, { useState } from "react";
// component responsible for rendering a form to create new recipe
// accepts onRecipeCreate prop which represents a fn to be called 
// define recipe state var with the initial state being set to empty strings for the properties
// the state here will be used to track the values entered in the form inputs
function RecipeCreate({ onRecipeCreate }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });
  // invoke this fn whenever there is a change to any of the inputs
  // extracts name and value from event.target element 
  // use spread op to create a new object with the previouse recipe state's properties and values, then sets the specified name property to the new value
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };
  // invoke this fn when the form is submitted
  // prevent default form submission behavior so there won't be a page refresh
  // invoke onRecipeCreate fn, passing current recipe state as arg to handle creation of new recipe
  // afterwards, use setRecipe to reset the state to initial values
  const handleSubmit = (event) => {
    event.preventDefault();
    onRecipeCreate(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };
  // attach onSubmit event listener to the handleSubmit fn 
  // individual form inputs within the form are defined, using handleChange as the event handler for the inputs to update the corresponding property of the recipe state
  // the textarea elements are associated with specific properties in the recipe state so that the textarea displays the current value
  // onChange event handler is used whenever the user changes content in the textarea, updates the recipe state with new value entered by user
  return (
    <form name="create" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={recipe.name}
        onChange={handleChange}
      />
  
      <label htmlFor="cuisine">Cusine:</label>
      <input 
        type="text"
        id="cuisine"
        name="cuisine"
        value={recipe.cuisine}
        onChange={handleChange}
      />
  
      <label htmlFor="photo">Photo:</label>
      <input
        type="text"
        id="photo"
        name="photo"
        value={recipe.photo}
        onChange={handleChange}
      />
  
      <label htmlFor="ingredients">Ingredients:</label>
      <textarea
        id="ingredients"
        name="ingredients"
        value={recipe.ingredients}
        onChange={handleChange}
      ></textarea>
  
      <label htmlFor="preparation">Preparation:</label>
      <textarea
        id="preparation"
        name="preparation"
        value={recipe.preparation}
        onChange={handleChange}
      ></textarea>
  
      <button type="submit">Create</button>
    </div>
  </form>  
  );
}

export default RecipeCreate;
