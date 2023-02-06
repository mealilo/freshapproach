

const ItemListing = (listings) => {
    
    return (
        <div className="flex flex-col mx-5 my-5 rounded-lg shadow-lg bg-white max-w-sm">
            <div>
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="max-w-full h-auto rounded-t-lg" alt="" />
            </div>
            <div className="flex flex-col justify-between text-left p-6">
                <div className="flex flex-col flex-1 grow">
                    <h4 className="text-gray-900 text-2xl leading-tight font-medium mb-2">{listings.test}</h4>
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Lorem Ipsum lajdlfkjdj aldskfj lakdjf lakdjfalkdjf</h5>
                </div>
                <div className="flex flex-row flex-1 justify-between grow">
                    <p className="text-gray-700 text-base">
                        $35 per bushel
                    </p>
                    <p className="text-gray-700 text-base">4.5</p>
                </div>
            </div>
        </div>
    )
}

const Listings = () => {

    return (
        <div className="text-center bg-gray-50 text-gray-800 py-16 px-6">
            <h1 className="text-5xl font-bold mt-0 mb-6">Discover New Produce</h1>
            <div className="flex justify-center flex-wrap">
                <ItemListing test="lilia" />
            </div>
        </div>
    )
};

export default Listings;