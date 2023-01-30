import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

const Listing = ({ listing }) => {

    return (
        <div>
            <h2>{listing.title}</h2>
            <small> {listing.description}</small>
            <small> {listing.price}</small>
        </div>
    )
}

export default Listing


//export const getServerSideProps = async () => {
//    const pictures = await prisma.listing_picture.findMany({
//        where: {listing_ID: listing.listing_ID}

//    })
//    console.log(pictures);
//    return {
//        props: { pictures: makeSerializable(pictures) },
//    }
//    console.log(pictures);
//}


