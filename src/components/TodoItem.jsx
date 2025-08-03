import { useReducer, useState } from "react";
import useAppContext from "../context/AppContext";

function TodoItem({ todo }) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "EDIT":
        return { ...state, isTodoEditable: action.payload };
      case "SAVE":
        return { ...state, todoMsg: action.payload };
      default:
        return state;
    }
  }, {
    isTodoEditable: false,
    todoMsg: todo.msg,
  });

  const { editTodo, deleteTodo, toggleTodo } = useAppContext();

  return (
    <div
      className={`w-full flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${state.isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
        value={state.todoMsg}
        onChange={(e) => dispatch({ type: "SAVE", payload: e.target.value })}
        readOnly={!state.isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (state.isTodoEditable) {
            editTodo(todo.id, { msg: state.todoMsg });
            dispatch({ type: "EDIT", payload: false });
          } else dispatch({ type: "EDIT", payload: true });
        }}
        disabled={todo.completed}
      >
        {state.isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
