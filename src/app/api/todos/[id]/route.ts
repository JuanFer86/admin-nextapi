import { prisma } from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { get } from "http";
import { NextResponse, NextRequest } from "next/server";
import { boolean, object, string } from "yup";

interface Segments {
  params: {
    id: string;
  };
}

const putSchema = object({
  description: string().optional(),
  complete: boolean().optional(),
});

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({ where: { id } });

  return todo;
};

export async function GET(request: Request, { params }: Segments) {
  const { id } = await params;

  if (typeof id !== "string")
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const todo = await getTodo(id);

  if (!todo)
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });

  return NextResponse.json(todo);
}

export async function PUT(req: Request, { params }: Segments) {
  const { id } = await params;

  if (typeof id !== "string")
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const todo = await getTodo(id);

  if (!todo)
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });

  try {
    const { complete, description } = await putSchema.validate(
      await req.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: { complete, description },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
