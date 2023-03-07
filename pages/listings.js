import ItemListing from "../components/ItemListing";
import { makeSerializable } from "../lib/util";
import prisma from "../lib/prisma";
import Link from "next/link";
import { Component } from 'react';

export const getServerSideProps = async () => {
    const items = await prisma.listing.findMany({
        //include foregin keys, in this case there is a FK to listing_picture, so we make sure to include it
        // need to add unit type
        // need to add seller info?
        include: {
            listing_picture: true,
        },

    })
    return {
        props: { items: makeSerializable(items) },
    }
}

class Listings extends Component {

    render() {
        return (
            <div className="text-center bg-gray-50 text-gray-800 py-16 px-6">
                <h1 className="text-5xl font-bold mt-0 mb-6">Discover New Produce</h1>
                <div className="flex justify-center flex-wrap">
                    {this.props.items.map(item => (
                        <Link 
                            href={`/listing?id=${item.listing_ID}`} 
                            key={item.listing_ID}
                        >
                            <ItemListing listing={item} />
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
};

// const Listings = (props) => {
//   return (
//     <div className="text-center bg-gray-50 text-gray-800 py-16 px-6">
//       <h1 className="text-5xl font-bold mt-0 mb-6">Discover New Produce</h1>
//       <div className="flex justify-center flex-wrap">
//         {props.items.map((item) => (
//           <Link href={`/listing?data=${item}`} key={item.listing_ID}>
//             <ItemListing listing={item} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Listings;
/* */
