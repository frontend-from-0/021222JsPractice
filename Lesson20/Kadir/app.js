// Get the input field, form and the list
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const form = document.getElementById('todo-form');

// Add a listener to the form to handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Create a new task item and add it to the list

  const listItemElement=document.createElement("li");
  const spanElement = document.createElement("span");
  spanElement.innerText = input.value;
  listItemElement.appendChild(spanElement);
  
  // Remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = 'X';
  // TODO: Update styles of removeButton! (use button--light class)
  
  list.appendChild(listItemElement);

  // Add a listener to the task item to toggle its completed status
  spanElement.addEventListener('click',() => {
    // TODO: "completed" class is applied both to the text of the item and the button. Refactor the content of li element so that the class is only applied to the text but not to the button!

   
    // listItemElement.classList.toggle("completed");
    // var a = document.listItemElement.value
  //  input.value.classList.toggle("completed");
    // listItemElement.parentNode.classList.remove(removeButton);
    // removeButton.classList.deactivateClass(completed);

    spanElement.classList.toggle("completed");

  });
  
  // removeButton.removeAttribute('text-decoration');
  // removeButton.classList.deactivateClass(completed);
  // removeButton.classList.remove("completed");

  // removeButton.style.removeProperty("textDecoration");
  // removeButton.style.textDecoration='none';
  removeButton.classList.add("button--light");
  
 

  removeButton.addEventListener("mouseover",()=>{
    removeButton.classList.add("button--light:hover");
  });

  removeButton.addEventListener("click",()=>{
    list.removeChild(listItemElement);
  });
  
  listItemElement.appendChild(removeButton);
  
  // Clear the input field
input.value = "";
});
  