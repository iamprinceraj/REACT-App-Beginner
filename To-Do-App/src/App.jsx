import "./App.css";

import TodoInput from "./components/TodoInput";
import Dates from "./components/Date";
import { Time } from "./components/Time";
// import { Item } from "./components/Item";
import { Todoitems } from "./components/Todoitems";
import styles from "./components/Date.module.css";
import { useState } from "react";

function App() {
  let initialTodoItems = [
    {
      todo: "Play Cricket",
      dueDate: "2004-02-26",
    },
    {
      todo: "Go to college Event",
      dueDate: "2024-02-16",
    },
    {
      todo: "Read Books",
      dueDate: "2024-02-19",
    },
  ];

  // Define State For items in to-do list

  const [todoItem, setTodoItem] = useState(initialTodoItems);

  // Calling props on adding Item

  const onNewItem = (item, date, defaultTask) => {
    let addedItems = {
      todo: item,
      dueDate: date,
    };

    const newTodoItems = [...todoItem, addedItems];

    // Setting State for newly Added items in the list

    setTodoItem(newTodoItems);
  };

  // Delete Button functionality

  const handleOnDelete = (itemName) => {
    const newTodoItems = todoItem.filter((items) => items.todo !== itemName);

    setTodoItem(newTodoItems);
  };

  return (
    <div className="container">
      <div className={styles["date-time"]}>
        <Dates></Dates>
        <Time></Time>
      </div>
      <div className="item">
        {/*  Heading of To do app */}

        <h1 className="heading">To Do App</h1>

        {/* Input component  */}

        <TodoInput onAddItem={onNewItem}></TodoInput>
      </div>

      {/* ToDo Items Componets */}

      <Todoitems item={todoItem} onDelete={handleOnDelete}></Todoitems>

      {/* Empty message will show when no items in the toDo List */}

      {todoItem.length === 0 && (
        <center>
          <h3 className="empty-todo-msg">There is nothing to do more</h3>
        </center>
      )}
    </div>
  );
}

export default App;
