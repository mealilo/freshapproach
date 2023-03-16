import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(req, res) {
  const { functionName } = req.query;

  // delete specific listing
  if (functionName === 'deleteListing') {

    try{
      const { listing_ID } = req.body;
      //Cascade delete listing and listing pictures
      const listing = await prisma.listing.delete({
        where: {
          listing_ID: parseInt(listing_ID)
        },
       })
      res.status(500).json({ message: 'Listing and Images updated' });
    }

    catch {
      res.status(200).json({ message: 'Error: not able to delete' });

    }
  } 

  //Delete entire profile
  else if (functionName === 'updateProfile') {
    const { personID } = req.body;
    try {
      const { fname, lname, city, zip, phone, password, email } = req.body;

      const person = await prisma.person.update({
        where: {
          person_ID: parseInt(personID)
        },

        data: {
          first_name: fname,
          last_name: lname,
          email: email,
          password: password
        }
       })
       console.log(person)

       const producer = await prisma.producer.update({
        where: {
          person_ID: parseInt(personID)
        },

        data: {
          phone_number: phone,
          address: city,
          zip_code: zip
        }
       })
       console.log(producer)


       res.status(200).json({ message: 'Profile Updated' });
        console.log(`account with id ${personID} updated`);
      } 
      catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Profile failed to update' });

      } 
    
    }


  //Delete entire profile
  else if (functionName === 'deleteProfile') {
    const { personID } = req.body;
    try {

      const person = await prisma.person.delete({
        where: {
          person_ID: parseInt(personID)
        },
       })

        console.log(`account with id ${personID} deleted`);
      } 
      catch (error) {
        console.error(error);
      } 
    
    }
  else {
    res.status(400).json({ message: 'Invalid function name' });
  }
}