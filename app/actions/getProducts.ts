
import prisma from '../libs/prismadb'

export interface IProductsParams {
    userId?: string;
    category?: string;
    price?: string;
}

export default async function getProducts(params: IProductsParams) {
    try {
        const { userId, category, price } = params;

        let query: any = {};
        
        if (userId) {
            query.userId = userId;
        }

        if (category) {
            query.category = category;
        }

        if (price) {
            query.price = { lte: +price };
        }


        const products = await prisma.product.findMany({
            where: query,
            orderBy: {
                createdAt: "desc",
            },
        })
        return products;
    } catch (error: any) {
        return null;
    }
}