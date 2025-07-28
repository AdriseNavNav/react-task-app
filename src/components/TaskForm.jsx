import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-zinc-700 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Agrega una tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Título de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Descripción de la tarea."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button
          className="bg-indigo-500 rounded-md py-1 px-2 mt-2 hover:bg-indigo-400 w-full text-white font-bold"
        >Guardar</button>
      </form>
    </div>
  );
}
