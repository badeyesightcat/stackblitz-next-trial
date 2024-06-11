import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      { message: "successfully conntected" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
