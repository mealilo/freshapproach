import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const {listing, listing_picture } = req.body;
//create person, also with the producer line, create a producer object as well.
  try {
    await prisma.listing_picture.create({
      data: {
        listing_ID: listing,
        picture_link: listing_picture
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