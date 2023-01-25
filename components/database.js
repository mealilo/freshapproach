const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const Test = await prisma.Test.findMany()
    console.log(Test)
    // const allUsers = await prisma.user.findMany()
    // console.log(allUsers)
    // const allPosts = await prisma.profile.findMany();
    // console.log(allPosts);

    // // create user
    await prisma.Test.create({
        data: {
            FIRST_NAME: "Hello world",
            EMAIL: "test usDDDer2gmail.com"

        }

    })

    const Test2 = await prisma.Test.findMany()
    console.log(Test2)
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