import { useEffect, useState } from "react";
import Form from "../Components/Form";
import { TodoList } from "../Components/TodoList";
import Modal from "../Components/Modal";
import Pagination from "../Components/Pagination";
import { Header } from "../Components/Header";
import Navbar from "../Components/Navbar";

function Home() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  const [editTodo, setEditTodo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(4);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList
        todos={todos}
        currentTodos={currentTodos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        setShowModal={setShowModal}
      />
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={todos.length}
        paginate={paginate}
      />
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
        />
      )}
    </div>
  );
}

export default Home;
