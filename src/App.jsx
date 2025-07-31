import { useContext, useEffect, useState } from "react";
import useAppContext, { AppContextProvider } from "./context/AppContext";
import { TodoForm, TodoItem } from "./components";
import { use } from "react";

let count = 0;
function AppContent() {
  const { todos, setTodos } = useAppContext();

  useEffect(() => {
    console.log(count)
    if (count) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else{
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      if (storedTodos) {
        setTodos(storedTodos);
      }
      count++;
    }
  }, [todos]);

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rousetTodes nded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
          {todos.length === 0 && (
            <div className="w-full text-center text-gray-400">
              No todos available. Please add some!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}