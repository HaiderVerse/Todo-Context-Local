import { useState } from "react";
import useAppContext from "../context/AppContext";


function TodoForm() {
  console.log("TodoForm rendered");
  const [todoMsg, setTodoMsg] = useState("");
  const { addTodo } = useAppContext();

  function handleSubmit(e) {
    e.preventDefault();
    if (todoMsg.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      msg: todoMsg,
      completed: false,
    };

    addTodo(newTodo);
    setTodoMsg(""); // Clear input after adding
  }

  return (
    <form 
      className="flex"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
