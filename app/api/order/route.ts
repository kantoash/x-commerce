import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

//  id: string
//   name: string
//   address: string
//   productIds: string[]
//   createdAt: Date
//   updatedAt: Date
//   userId: string

export async function POST(request: Request) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        
        const { name, address, products } = body;
    
        if (!name || !address || !products) {
            throw new Error("Invalid");
        }
 
        if (!currentUser) {
            throw new Error("Login");
        }
    
        const order = await prisma.order.create({
            data: {
                name,
                address,
                productIds: products,
                userId: currentUser.id
            }
        })
    
        return NextResponse.json(order);
    } catch (error) {
        return NextResponse.json(error);
    }
}