import React from "react";
import Nav from "../Nav";
import Form from "../Form";
import TodoList from "../TodoList";

export default function App() {
  const [todo, setTodo] = React.useState([]);
  const [darkMode, setDarkMode] = React.useState(false);

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
  const handleDark = () => {
    setDarkMode(!darkMode)
  }
  

  return (
    <div
      style={
        !darkMode
          ? { background: "#202C33" }
          : { background: "white" }
         
          
      }
      
      className="app"
    >
      
       {console.log(darkMode)}
      <Nav />
      <Form addTodo={addTodo} />
      <TodoList
        todo={todo}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleClear={handleClear}
        handleDark={handleDark}
        darkMode={darkMode}
      />
    </div>
  );
}
