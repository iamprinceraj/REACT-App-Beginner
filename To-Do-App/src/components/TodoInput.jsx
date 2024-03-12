import React, { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";

//        Main component

function TodoInput({ onAddItem }) {
  const [todoName, SetTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [disablAdd, setDisable] = useState(true);
  // const [defaultTask, setDefault] = useState("Daily");

  // Event calling function on change in todo *Name input field

  const onNameChange = (event) => {
    SetTodoName(event.target.value);
    // console.log(event);

    if (event.target.value === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  // Event calling function on change in todo *Date input field

  const onDateChange = (event) => {
    // console.log(setTodoDate(event));
    setTodoDate(event.target.value);

    if (event.target.value.includes(todoDate) && todoName === "") {
      setDisable(true);
    }

    // if (!event.target.value.includes(todoDate)) {
    //   const newDefaultTask = defaultTask
    //   setDefault(newDefaultTask);
    // }
  };

  // Handle delete Functionality of to-do list

  const handleAddItem = () => {
    console.log(todoName, todoDate);
    onAddItem(todoName, todoDate);
    SetTodoName("");
    setTodoDate("");
    setDisable(true);
  };

  return (
    <React.Fragment>
      <div className="row items">
        <div className="col-4">
          <input
            type="text"
            required
            value={todoName}
            placeholder="Enter your To-Do"
            onChange={onNameChange}
          />
        </div>
        <div className="col-4">
          <label htmlFor="dueDAte"></label>
          <input
            type="date"
            required
            onChange={onDateChange}
            id="dueDAte"
            value={todoDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success btn-action"
            disabled={disablAdd}
            onClick={handleAddItem}
            onKeyDown={handleAddItem}
          >
            <MdAssignmentAdd />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TodoInput;
