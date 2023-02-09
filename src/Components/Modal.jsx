import React, { useState } from "react";

export default function Modal({ setShowModal, editTodo, setTodos, todos }) {
  const [todoValues, setTodoValues] = useState(editTodo);

  const changeInputHandler = (e) => {
    setTodoValues((prevTodoValues) => {
      return {
        ...prevTodoValues,
        title: e.target.value,
      };
    });
  };

  const changeCheckedHandler = (e) => {
    setTodoValues((prevTodoValues) => {
      return {
        ...prevTodoValues,
        completed: !prevTodoValues.completed,
      };
    });
  };

  const submitTodos = () => {
    //we copy the todos
    //we we reassign the item
    //and set the modified copy to the todos
    const foundIndex = todos.findIndex((item) => item.id === todoValues.id);
    const todosCopy = todos;
    todosCopy[foundIndex] = todoValues;
    setTodos(todosCopy);
    setShowModal(false);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        {editTodo === null ? (
          <h1>Looks like there's nothing to Edit here...</h1>
        ) : (
          <div className="modal-content">
            <h1>Edit Task</h1>
            <input
              type="text"
              value={todoValues.title}
              onChange={changeInputHandler}
            />{" "}
            <br />
            <label> Completed ? </label>
            <input
              type="checkbox"
              checked={todoValues.completed}
              onChange={changeCheckedHandler}
            />
            <button onClick={() => setShowModal(false)}>Close</button>
            <button onClick={submitTodos}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
}
