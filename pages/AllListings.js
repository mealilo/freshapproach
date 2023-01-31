import Listing from "../components/ItemListing"
import { makeSerializable } from '../lib/util'
import prisma from '../lib/prisma';



//all listings is generated below, it's the props or something I think? '
const allListings = props => {
    return (
        <div className="page">
            <main>
                {/*items  = whatever is returned from getserverside props below */}
                    {props.items.map(listing => (
                        <div key={listing.listing_ID}>
                            <Listing listing={listing} />
                            
                            <img  src={ listing.listing_picture[0].picture_link }/>
                        </div>

                    ))}
                </main>
            </div>

    )
}


export const getServerSideProps = async () => {
    const items = await prisma.listing.findMany({
        //include foregin keys, in this case there is a FK to listing_picture, so we make sure to include it
        include: {
            listing_picture: {
                select: {
                    picture_link: true,
                }
            }
        },
        //include everything in foregin table
        //include: {
        //    listing_picture: true,
        //},

    })
    console.log("Picture LINK")
    console.log(items[0].listing_picture[0].picture_link);
    //console.log(items);
    return {
        props: { items: makeSerializable(items) },
    }
}

export default allListings

