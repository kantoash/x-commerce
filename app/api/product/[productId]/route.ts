
import getProductById from "@/app/actions/getProductById";
import { NextResponse } from "next/server";

interface IParams {
    productId?: string;
  }

export async function GET(request: Request,{ params }: { params: IParams }) {
   try {
    const currentUser = await getProductById(params)
    return NextResponse.json(currentUser);
   } catch (error) {
    return NextResponse.error();
   }
}