
import prisma from '../libs/prismadb'
import getCurrentUser from './getCurrentUser';

export default async function getMyOrders() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return [];
        }
        
        const products = await prisma.order.findMany({
            where: {
                userId: currentUser?.id
            }
        })

        return products;
    } catch (error: any) {
        return null;
    }
}