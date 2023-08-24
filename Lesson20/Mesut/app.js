const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const form = document.getElementById("todo-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value !== "") {
    const divElement = document.createElement("div");
    divElement.classList.add("container-div");
    const listItemElement = document.createElement("p");
    listItemElement.className = "list-item";
    listItemElement.innerText = input.value;
    const removeButton = document.createElement("button");
    removeButton.innerText = "X";
    removeButton.className = "remove-button";

    list.appendChild(divElement);
    divElement.appendChild(listItemElement);
    divElement.appendChild(removeButton);

    listItemElement.addEventListener("click", () => {
      listItemElement.classList.toggle("completed");
    });

    removeButton.addEventListener("click", () => {
      list.removeChild(divElement);
    });
  }

  input.value = "";
});
