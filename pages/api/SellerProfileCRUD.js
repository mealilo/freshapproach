import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(req, res) {
  const { functionName } = req.query;
  console.log(req.query);


  // delete specific listing
  if (functionName === 'deleteListing') {
    const { listing_ID } = req.body;
    //Cascade delete listing and listing pictures
    const listing = await prisma.listing.delete({
      where: {
        listing_ID: parseInt(listing_ID)
      },
     })
    res.status(200).json({ message: 'Listing and Images updated' });
  } 


  //Delete entire profile
  else if (functionName === 'deleteProfile') {
    const { personID } = req.body;
    // get producerID based on  personID
    const producer = await prisma.producer.findMany({
        where: {
            person_ID: parseInt(personID)
        },
    })
    console.log(producer);
    try {
        const result = await prisma.$transaction([
        prisma.listing_picture.deleteMany({
            where: {
                accountId: producer.producer_ID
            }
            }),


          prisma.listing.deleteMany({
            where: {
              accountId: producer.producer_ID
            }
          }),
          prisma.account.delete({
            where: {
              id: accountId
            }
          })
        ]);
        console.log(`${result[0].count} listings and account with id ${accountId} deleted`);
      } 
      catch (error) {
        console.error(error);
      } 
    
    }
  else {
    res.status(400).json({ message: 'Invalid function name' });
  }
}