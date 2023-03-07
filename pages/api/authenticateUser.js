import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const user = await prisma.person.findUnique({ where: { email } });
  let emailConf = false;
  let passwordConf = false;

  try {
    if (email == user.email) {
      console.log("email matches");
      emailConf = true;
    } else {
      throw new Error("Invalid email");
    }

    if (password == user.password) {
      console.log("password matches");
      passwordConf = true;
    } else {
      throw new Error("Invalid email");
    }

    if ((emailConf && passwordConf) == true) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(500).json({ message: "Error" });
    }
  } catch (error) {
    console.error("Error logging in :", error);
    res.status(500).json({ message: "Error" });
  } finally {
    await prisma.$disconnect();
  }
};
