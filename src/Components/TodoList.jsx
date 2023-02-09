import { useState } from 'react'

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const clickHandler = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, input];
    });

    setInput("");
  };

  const deleteItem = (e) => {
    // console.log(e.target.id)
    const todosCopy = todos;
    if (e.target.id > -1) {
      todosCopy.splice(e.target.id, 1);
    }

    setTodos(todosCopy);
  };

  console.log(todos);

  const todoElements = todos.map((todo, index) => {
    return (
      <li key={index}>
        {todo}{" "}
        <button id={index} onClick={deleteItem}>
          {" "}
          Delete
        </button>
      </li>
    );
  });

  return (
    <div>
      <label htmlFor="input">Input To Do</label>
      <input
        id="input"
        type="text"
        placeholder="type something"
        value={input}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>Submit Todo</button>

      <div>
        <ul>{todoElements}</ul>
      </div>
    </div>
  );
}
