import { createContext, useContext, useState } from "react";



export const AppContext = createContext({
    todos: [
        {
            id: 1,
            msg: "Sample Todo",
            completed: false
        }
    ],
    setTodos: () => {},
    addTodo: (todo) => {},
    editTodo: (id, updatedTodo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
});


export const AppContextProvider = ({ children }) => {
    const [todos, setTodos] = useState(
        localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    );
    // console.log(todos);
    
    const addTodo = (todo) => {
        setTodos((prevTodos) => [...prevTodos, todo]);
    }
    const editTodo = (id, updatedTodo) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => 
                todo.id === id ? { ...todo, ...updatedTodo } : todo
            )
        );
    }
    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }   
    const toggleTodo = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }
    return (
        <AppContext.Provider value={{ todos, setTodos, addTodo, editTodo, deleteTodo, toggleTodo }}>
            {children}
        </AppContext.Provider>
    );
}

export default function useAppContext() {
    return useContext(AppContext);
}