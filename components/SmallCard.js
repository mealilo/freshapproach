
function SmallCard({key, img, description}){
    return(
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
        {/*left*/}
        <div className="relative h-16 w-16">
        <img
        src={img} key={key}
        />
        </div>
       
        {/* right */} 
        <div>
            <h2>{description}</h2>
           
        </div>
        </div> 
    );
}
export default SmallCard