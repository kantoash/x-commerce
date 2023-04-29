import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  productId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
  const currentUser = await getCurrentUser();
  const data = await request.json();
  const { productId } = params;
  const { body } = data;

  if (!productId || typeof productId !== "string") {
    throw new Error("Invalid Product Id");
  }

  if (!body) {
    throw new Error("No Review Body");
  }

  if (!currentUser) {
    throw new Error("Login");
  }

  const list = await prisma.review.create({
    data: {
      body,
      productId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(list);
  } catch (error) {
    return NextResponse.json(error);
  }
}
