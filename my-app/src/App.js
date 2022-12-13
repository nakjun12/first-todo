import logo from "./logo.svg";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import Todoput from "./components/Todoput";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3001/todolist")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setTodos(data);
        })
        .catch((err) => {
          console.log("이!!");
        });
    }, 1000);
  }, []);
  console.log(todos);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Template>
              <TodoList todos={todos} />
            </Template>
          }
        />
        <Route path="/create" element={<TodoInsert />} />
        <Route path="/put" element={<Todoput />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
