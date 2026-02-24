function addTodo() {
  // 1) Get the input element
  const inputEl = document.querySelector("#todoInput");
  // 2) Get the value from the input (use .value property)
  const text = inputEl.value;
  // 3) Get the ul element (the todo list)
  const ulEl = document.querySelector("#todoList");  
  // 4) Use insertAdjacentHTML('beforeend', '<li>...</li>') to add the item
  //    Make sure to include the todo text in the <li>
  const listStr = `<li>${text}</li>`;
  ulEl.insertAdjacentHTML('beforeend', listStr);
  // 5) Clear the input field (set .value to empty string)
  inputEl.value = "";
}