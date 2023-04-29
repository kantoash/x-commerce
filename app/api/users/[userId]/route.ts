import getUserById from "@/app/actions/getUserById";
import { NextResponse } from "next/server";


interface IParams {
  userId?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  try {
    const user = await getUserById(params);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
}
