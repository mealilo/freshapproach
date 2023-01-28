const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


// GET /api/filterPosts?searchString=:searchString
export default async function handle( res) {
    const resultPosts = await prisma.listing.findMany({
        where: {
            OR: [
                {
                    title: { contains: "PEACH" },
                },
                {
                    description: { contains: "PEACH" },
                },
            ],
        },
    })
    res.json(resultPosts)
}