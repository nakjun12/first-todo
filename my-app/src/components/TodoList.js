import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todos) => (
        <TodoItem key={todos.id} todos={todos}></TodoItem>
      ))}
    </div>
  );
}
