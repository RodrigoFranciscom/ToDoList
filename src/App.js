import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
      <div className="header d-flex justify-content-center">
        <h1 className="h1">Mi Todo List </h1>
      </div>
      <div>
        <div className="form">
          <form onSubmit={addTodo}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Tarea</span>
              <input
                className="form-control"
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
              <button type="submit" className="btn btn-primary">Agregar</button>
            </div>
          </form>
          <div className="list">
            <ol className="list-group list-group-numbered">
              {todos.map((todo, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => toggleTodo(index)}
                    className="me-2"
                  />
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{todo.text}</div>
                  </div>
                  <button onClick={() => deleteTodo(index)} className="btn btn-danger">borrar</button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
