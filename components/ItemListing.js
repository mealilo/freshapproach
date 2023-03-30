import ReactMarkdown from 'react-markdown';
import SVG from "../public/icons/svg";
import Image from "next/image";
const Listing = ({ listing }) => {
    const { title, description, price, listing_picture } = listing;

    return (
        <div className="flex flex-col mx-5 my-5 rounded-lg shadow-lg bg-white max-w-sm">
            <div className="w-96 h-48 object-cover">
                {listing_picture.length > 0 &&
                    <Image src={listing_picture[0].picture_link} height="300" width="300" className="w-96 h-48 object-cover rounded-t-lg" alt="" />
                }
            </div>
            <div className="flex flex-col justify-between text-left p-6">
                <div className="flex flex-col max-h-64">
                    <h4 className="text-gray-900 text-2xl leading-tight font-medium mb-2">{title}</h4>
                    <p className="text-gray-900 text-m leading-tight font-medium mb-2 truncate">{description}</p>
                </div>
                <div className="flex flex-row flex-1 justify-between grow">
                    <p className="text-gray-700 text-base">
                       ${price} *still need unit type
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Listing

/* */
