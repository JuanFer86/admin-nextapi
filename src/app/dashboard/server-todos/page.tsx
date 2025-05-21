export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NewTodo, TodosGrid } from "@/todos";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Listado de Server Todos",
  description: "Listado de Server Todos",
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      description: "asc",
    },
  });

  console.log("builded");

  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo completedTodos={todos.filter((todo) => todo.complete)} />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
