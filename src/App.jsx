import { useEffect, useState } from "react";
import Form from "./Components/Form";
import { TodoList } from "./Components/TodoList";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(()=>{
    return JSON.parse(localStorage.getItem('todos'))|| []
  });
  const [editTodo, setEditTodo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="app-container">
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} setShowModal={setShowModal}/>
      {showModal && <Modal setShowModal={setShowModal} todos={todos} setTodos={setTodos} editTodo={editTodo}/>}

    </div>
  );
}

export default App;
