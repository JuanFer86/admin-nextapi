import { Todo } from "@prisma/client";

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const body = { complete };

  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = await todo.json();

  return res;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description };

  const todo = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = await todo.json();

  return res;
};

export const deleteTodo = async (ids: string[]): Promise<Todo> => {
  await sleep(2);

  const todo = await fetch(`/api/todos`, {
    method: "DELETE",
    body: JSON.stringify(ids),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = await todo.json();

  return res;
};
