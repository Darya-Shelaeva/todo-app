import "./style.css";
const input = document.querySelector("#input"); //найти блок по id
const toDoList = document.querySelector("#todo_list");
const activeTodo = document.querySelector("#active_todo");

input?.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    console.log(event.target.value);
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const toDoElement = document.createElement("div");
    toDoElement.appendChild(checkBox);
    const spanElement = document.createElement("span");
    spanElement.textContent = event.target.value;
    toDoElement.appendChild(spanElement);
    toDoList?.appendChild(toDoElement);
    console.log(`${toDoList?.children.length} активных задач`);
    document.getElementById('input').value = '';
    // activeTodo?.textContent = `${toDoList?.children.length} активных задач`
  }
});
