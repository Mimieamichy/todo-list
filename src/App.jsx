import React from "react";
import Nav from "../Nav";
import Form from "../Form";
import TodoList from "../TodoList";

export default function App() {
  const [todo, setTodo] = React.useState([]);

  const addTodo = (nTodo) => {
    setTodo((preValue) => [...preValue, nTodo]);
  };
  const handleDelete = (id) => {
    setTodo((todo) => todo.filter((item) => item.id !== id));
  };
  const handleCheck = (id) => {
    setTodo((todo) =>
      todo.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClear = () => {
    setTodo([]);
  };

  return (
    <div
      style={{
        width: "60%",
        margin: "0 auto",
      }}
    >
      <Nav />
      <Form addTodo={addTodo} />
      <TodoList
        todo={todo}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleClear={handleClear}
      />
    </div>
  );
}
