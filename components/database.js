const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    const allPosts = await prisma.profile.findMany();
    console.log(allPosts);

    // create user
    await prisma.user.create({
        data: {
            name: "Hello world",
            email: "test user2gmail.com"

        }

    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })