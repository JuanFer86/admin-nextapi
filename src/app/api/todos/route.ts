import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { array, boolean, object, string } from "yup";

const deleteSchema = array(string());

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = +(searchParams.get("take") ?? "10");
  const skip = +(searchParams.get("skip") ?? "0");

  if (isNaN(take))
    return NextResponse.json(
      { error: "Invalid take parameter" },
      { status: 400 }
    );

  if (isNaN(skip))
    return NextResponse.json(
      { error: "Invalid skip parameter" },
      { status: 400 }
    );

  const todos = await prisma.todo.findMany({
    take,
    skip,
  });

  return NextResponse.json(todos);
}

const postSchema = object({
  description: string().required(),
  complete: boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const { description, complete } = await postSchema.validate(
      await request.json()
    );

    const todo = await prisma.todo.create({ data: { description, complete } });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await deleteSchema.validate(await req.json());

    const deletedTodo = await prisma.todo.deleteMany({
      where: {
        id: {
          in: body as string[],
        },
      },
    });

    return NextResponse.json({
      message: "Todo Deleted",
    });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
