const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export default async function handler(req, res) {
	let fname = req.body.fname;
	let lname = req.body.lname;
	let email = req.body.email;
    let password = req.body.password;
    CreatePerson(fname, lname, email, password);

	res.status(200).json({ fname: 'John Doe' })
}


async function CreatePerson( first_name, last_name, email, password) {
    const date = new Date();
    console.log(first_name)

    await prisma.person.create({
        data: {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            profile_picture_link: "",
            created_on: date,
        }

    })

}

CreatePerson()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })