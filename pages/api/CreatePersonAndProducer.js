import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { fname, lname, email, password, city, zip, phone, publicAddress, publicEmail, publicPhone  } = req.body;
  const date = new Date();
  console.log(publicAddress);

    // private by default, but need to conver to boolean
  let publicAddressBool = false;
  let publicPhoneBool = false;
  let publicEmailBool = false;

// if public, change publicbool to true
  if(publicAddress == 'on'){
    publicAddressBool = true
  }
  if(publicEmail == 'on'){
    publicEmailBool = true
  }
  if(publicPhone == 'on'){
    publicPhoneBool = true
  }

//create person, also with the producer line, create a producer object as well.
  try {
    await prisma.person.create({
      data: {
        first_name: fname,
        last_name: lname,
        email: email,
        password: password,
        profile_picture_link: "",
        created_on: date,
        producer: {
            create: {address: city, zip_code: zip, state: "UT", phone_number: phone, address_public: publicAddressBool, phone_number_public: publicPhoneBool, email_public: publicEmailBool} 
        }
      },
    });

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error creating person:", error);
    res.status(500).json({ message: "Error" });
  } finally {
    await prisma.$disconnect();
  }
};