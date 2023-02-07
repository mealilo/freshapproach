const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export default async function handler(req, res) {
	let fname = req.body.fname;
	let lname = req.body.lname;
	let email = req.body.email;
    let password = req.body.password;
    try {
        CreatePerson(fname, lname, email, password);
        res.status(200).json({ fname: { fname } })
    }
    catch {
        let failure = "Unable to create an Account. Please try again or contact us."
        res.status(500).json({ error: { failure } })

    }

}


async function CreatePerson( first_name, last_name, email, password) {
    const date = new Date();
    console.log(first_name);
    console.log(last_name);
    console.log(email);
    console.log(password);

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