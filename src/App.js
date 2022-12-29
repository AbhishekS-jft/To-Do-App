import "./App.css";
import Header from "./MyComponents/header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am OnDelete Function", todo);
    // This is way of deleting do not work in React
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(
      todos.filter((i) => {
        return i !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addtodo = (title, desc) => {
    console.log("Adding");
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const temp = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, temp]);
    console.log(temp);
    //Setting up local storage
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todos List"/>
      <AddTodo addTodo={addtodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}
export default App;
