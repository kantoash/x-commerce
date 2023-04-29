import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const currentUser = await getCurrentUser();
    const body = await request.json();

    const { title, description, category, images, price } = body;

    if (!title || !description || !category || !images || !price) {
        throw new Error("Invalid");
    }
    const TypedImage: string[] = images
    const TypedPrice = Number(price);

    if (!currentUser) {
        throw new Error("Login");
    }

    const list = await prisma.product.create({
        data: {
            title,
            description,
            category,
            images: TypedImage,
            price: TypedPrice,
            userId: currentUser?.id,
        },
    })

    return NextResponse.json(list);
    } catch (error) {
        return NextResponse.json(error);
    }
}
