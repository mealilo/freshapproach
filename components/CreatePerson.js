const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



async function CreatePerson({first_name,last_name,email,password}) {
    const date = new Date();
    console.log(date);
    await prisma.person.create({
        data: {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            profile_picture_link: profile_picture_link,
            created_on: date,
        }

    })

}

Main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })