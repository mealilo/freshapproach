import Listing from "../components/ItemListing"
import { makeSerializable } from '../lib/util'
import prisma from '../lib/prisma';



//all listings is generated below, it's the props or something I think? '
const allListings = props => {
    return (
            <div className="page">
            <main>
                {/*items is equal to whatever is returned from */}
                    {props.items.map(listing => (
                        <div key={listing.listing_ID}>
                            <Listing  listing={listing} />
                        </div>
                    ))}
                </main>
            </div>

    )
}


export const getServerSideProps = async () => {
    const items = await prisma.listing.findMany({
        //include foregin keys, in this case there is a FK to listing_picture, so we make sure to include it
        include: { listing_picture: true },

    })
    console.log(items);
    return {
        props: { items: makeSerializable(items) },
    }
}

export default allListings

