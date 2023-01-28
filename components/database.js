const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here

    // query for all people
    const people = await prisma.person.findMany();
    console.log(people);

    //specific person
    const user = await prisma.person.findUnique({
        where: {
            person_ID: 1,
        },
    })
    console.log(user)




    //create user

    //const date = new Date();
    //console.log(date);
    //  create user
    //await prisma.person.create({
    //    data: {
    //        first_name: "Hello world",
    //        last_name: "programming",
    //        email: "testssDDDder2gmail.cddom",
    //        password: "test usDDDer2gmail.com",
    //        profile_picture_link: "test",
    //        created_on: date
    //    }

    //})

    //delete user

    //const deleteUser = await prisma.person.delete({
    //    where: {
    //        person_ID: 3,
    //    },
    //})


    // By ID


    //update a specific user
    const updateUser = await prisma.person.update({
        where: {
            person_ID: 1,
        },
        data: {
            first_name: 'Viola the Magnificent',
        },
    })
    //specific person
    const updatedUSER = await prisma.person.findUnique({
        where: {
            person_ID: 1,
        },
    })
    console.log(updatedUSER)
    
    export default user;


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