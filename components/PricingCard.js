function PricingCard (){
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">$35 per bushel</div>
          <p className="text-gray-600 text-base">
            OPEN HOURS: M-Sat, 10-5 PM
          </p>
          <p className="text-gray-600 text-base">
            AVAILABILITY: Freestone and Clingstone. We do it Upick style -- come pick your own peaches!
          </p>
              <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out h6">Contact Seller</button>
        </div>
      
        </div>
      
    );
}
export default PricingCard
