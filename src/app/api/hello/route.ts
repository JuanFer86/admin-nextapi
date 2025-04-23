import { NextResponse, NextRequest } from "next/server";

export async function GET(req: Request) {
  // your function here

  return NextResponse.json({
    hola: "mundo",
  });
}

export async function POST(req: Request) {
  // your function here

  return NextResponse.json({
    hola: "mundo",
    method: "POST",
  });
}
