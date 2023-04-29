import prisma from '../libs/prismadb'

interface IParams {
    productId?: string
}

export default async function getProductById(params: IParams) {
    try {

        const { productId } = params;

        if (!productId) {
            throw new Error('Product id invalid')
        }

        const product = await prisma.product.findUnique({
            where: {
                id: productId
            },
            include: {
                user: true,
                reviews: true
            }
        })


        if (!product) {
            throw new Error('Product not invalid')
        }

        return product;
    } catch (error: any) {
        return null;
    }
}