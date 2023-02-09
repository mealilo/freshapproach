import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { fname, lname, email, password, city, zip } = req.body;

  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(password);
  console.log(city);
  console.log(zip);

  const date = new Date();

  try {
    await prisma.person.create({
      data: {
        first_name: fname,
        last_name: lname,
        email: email,
        password: password,
        profile_picture_link: "",
        created_on: date
      },
    });

    res.status(200).json({ message: "Person created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating person" });
  } finally {
    await prisma.$disconnect();
  }
};