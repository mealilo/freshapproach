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


