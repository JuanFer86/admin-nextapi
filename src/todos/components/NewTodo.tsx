"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Todo } from "@prisma/client";
import { addTodo, deleteCompleted } from "../actions/actions";

interface Props {
  completedTodos?: Todo[];
}

export const NewTodo = ({ completedTodos }: Props) => {
  const router = useRouter();
  const [description, setDescription] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (description.length === 0) return;

    await addTodo(description);

    // router.refresh();
  };

  // const deleteCompleted = async () => {
  // await deleteTodo(completedTodos?.map((todo) => todo.id) || []);
  // router.refresh();
  // };

  return (
    <form className="flex w-full" onSubmit={onSubmit}>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 bg-white border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="What do you need to do?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Create
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompleted()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Delete completed
      </button>
    </form>
  );
};
