import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(req, res) {
  const { functionName } = req.query;




  // delete specific listing
  if (functionName === 'searchZip') {

    try{
     
    const codes = req.body;
      //Cascade delete listing and listing pictures
      let all_producers = await prisma.producer.findMany({
        where: {
            OR: codes.map((code) => ({ zip_code: code })),
        },
        include: {
            listing: true,
        },
       })


       // filter out producers with more than one listing
        let producers = all_producers.filter((producer) => producer.listing.length >= 1);
        //console.log(producers)
       res.json({producers});

    }

    catch {
      res.status(500).json({ message: 'Error: Not able to get listings' });

    }
  } 

}