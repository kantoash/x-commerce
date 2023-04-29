import prisma from '../libs/prismadb'

interface IParams {
    userId?: string
}

export default async function getUserById(params: IParams) {
    try {

        const { userId } = params;

        if (!userId) {
            throw new Error('user id invalid')
        }

        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })


        if (!user) {
            throw new Error('Product not invalid')
        }

        return user;
    } catch (error: any) {
        return null;
    }
}