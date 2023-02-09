import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { fname, lname, email, password, city, zip } = req.body;
  const date = new Date();

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
            create: {address: city, zip_code: zip, state: "UT", phone_number: "801-555-555", address_public: false, phone_number_public: false, email_public: true} 
        }
      },
    });

    res.status(200).json({ message: fname });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating person" });
  } finally {
    await prisma.$disconnect();
  }
};