import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(req, res) {
  const { functionName } = req.query;
  console.log(req.query);

  if (functionName === 'updateProfile') {
    const { name, email } = req.body;
    updateProfile(name, email);
    res.status(200).json({ message: 'Profile updated' });
  } 


  if (functionName === 'd') {
    const { name, email } = req.body;
    updateProfile(name, email);
    res.status(200).json({ message: 'Profile updated' });
  } 
  
  
  
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