import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const {producer_ID, product_sub_category_ID , title,description, quantity_available, price, unit_type } = req.body;

// prisma get category object based on input



//create listing,
  try {
    await prisma.listing.create({
      data: {
        producer_ID: 1,
        product_sub_category_ID: Number(product_sub_category_ID),
        title: title,
        description: description,
        quantity_available: quantity_available,
        price: Number(price),
        is_available: 1,
        unit_type: unit_type


      },
    });

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error creating Listing:", error);
    res.status(500).json({ message: "Error" });
  } finally {
    await prisma.$disconnect();
  }
};