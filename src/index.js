document.addEventListener(
  "DOMContentLoaded",
  () => {
    const form = document.getElementsByTagName("form")[0];

    form.addEventListener("submit", submitForm);

    // selector
    const selector = document.createElement("select");
    form.appendChild(selector);

    //options of selector
    const options = [
      {
        value: "high",
        label: "High Priority",
      },
      {
        value: "mid",
        label: "medium Priority",
      },
      {
        value: "low",
        label: "Low Priority",
      },
    ];
    //forEach loop
    options.forEach((selectOption) => {
      const option = document.createElement("option");
      option.value = selectOption.value;
      selector.appendChild(option);
      option.textContent = selectOption.label;
    });

    //event callback function
    function submitForm(event) {
      // to prevent submission of form after pressing submit
      event.preventDefault();

      const input = document.getElementById("new-task-description");

      const newTodo = input.value;

      if (newTodo !== "") {
        const listTodos = document.getElementById("tasks");

        const newItem = document.createElement("li");

        newItem.classList.add(selector.value);

        console.log(selector.value);

        newItem.innerHTML = `${newTodo}  `;

        listTodos.append(newItem);

        const btn = document.createElement("button");
        btn.innerText = "x";

        btn.addEventListener("click", deleteTodo);

        function deleteTodo(event) {
          event.target.parentElement.remove();
        }

        newItem.appendChild(btn);
        input.value = "";

        //RESETS WHATS WRITTEN INSIDE THE INPUT FIELD
        // form.reset();
      }
    }
  }

  //TO DO:
  // DELETING TODOS: 1- MAKE BUTTON ELEMENT -> HAS TEXT OF X/DELETE -> APPEND TO LI -> ATTACH EVENT LISTENER TO IT (CLICK)-> REMOVE PARENT ELEMENT
  // EDITTING TODOS: 1- MAKE BUTTON ELEMENT -> HAS EDIT ICON/EDIT TEXT -> APPEND TO LI -> ATTACH EVENT LISTENER TO IT (CLICK)-> PARENT ELEMENT INPUT.VALUE CHANGE TO NEW VALUE ->
  // SORTING BY PRIORITY:
  //ADDITIONAL INPUT FIELD (DUE DATE/ DURATION):
  // your code here
);
