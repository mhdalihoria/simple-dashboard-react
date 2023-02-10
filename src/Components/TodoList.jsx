import React from "react";
import taskIcon from "../imgs/task-icon.png";

export const TodoList = ({
  currentTodos,
  todos,
  setTodos,
  setEditTodo,
  setShowModal,
}) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => {
      return todo.id === id;
    });

    setEditTodo(findTodo);
    setShowModal(true);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoElements = currentTodos.map((todo) => (
    <div className="todo-item" key={todo.id}>
      <img src={taskIcon} />
      <li className="list-item">
        <div className="list-item--info">
          <h4 type="text" className="list-item-info--title">
            {todo.title}
          </h4>
          <h6 className="list-item-info--completed">
            Completed: {`${todo.completed}`}
          </h6>
        </div>
        <div className="list-buttons">
          <button
            className="button-complete task-button"
            onClick={() => handleComplete(todo)}
          >
            <i className="fa fa-check-circle"></i>
          </button>
          <button
            className="button-edit task-button"
            onClick={() => handleEdit(todo)}
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            className="button-delete task-button"
            onClick={() => handleDelete(todo)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  ));

  return <div className="todo-container">{todoElements}</div>;
};
