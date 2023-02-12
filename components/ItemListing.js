import ReactMarkdown from 'react-markdown';
import SVG from "../public/icons/svg";

const Listing = ({ listing }) => {
    const { title, description, price, listing_picture } = listing;

    return (
        <div className="flex flex-col mx-5 my-5 rounded-lg shadow-lg bg-white max-w-sm">
            <div className="w-96 h-48 object-cover">
                {listing_picture.length > 0 &&
                    <img src={listing_picture[0].picture_link} className="w-96 h-48 object-cover rounded-t-lg" alt="" />
                }
            </div>
            <div className="flex flex-col justify-between text-left p-6">
                <div className="flex flex-col flex-1 grow">
                    <h4 className="text-gray-900 text-2xl leading-tight font-medium mb-2">{title}</h4>
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{description}</h5>
                </div>
                <div className="flex flex-row flex-1 justify-between grow">
                    <p className="text-gray-700 text-base">
                       ${price} *still need unit type
                    </p>
                    <div className="flex flex-row">
                        <SVG name="star" class="text-Orange w-4" />
                        <p className="text-gray-700 text-base">*4.5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing


