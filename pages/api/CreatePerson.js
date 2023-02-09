const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
import { data } from 'autoprefixer';
import { NextApiRequest, NextApi } from 'next'





// export default async (req, res) => {
//  const Data = JSON.parse(req.body);

//  const newPerson = await prisma.person.create({
//     data: {
//         first_name: data.fname
//     }
//  })


//}
export default async function handler(req, res) {
	let fname = req.body.fname;
	let lname = req.body.lname;
	let email = req.body.email;
    let password = req.body.password;
    let zip = req.body.zip;

    try {
        CreatePerson(fname, lname, email, password, zip);
        res.status(200).json({ fname: { fname } })
    }
    catch {
        let failure = "Unable to create an Account. Please try again or contact us."
        res.status(500).json({ error: { failure } })

    }

}


async function CreatePerson( first_name, last_name, email, password, zip) {
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
            //producer: {
            //    create: [
            //        {address: '1243 Steven Circle', state: 'UT', zip_code: zip, phone_number: '8012005917', address_public: false, phone_number_public: false, email_public: true  }
            //    ]
            //}
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