
function Footer() {
  return (
    <div className="bg-closecropgreen">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-3xl mb-3 text-white"> FAQ </h3>
            <p> Terms and Conditions </p>

        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-white">
            <p className="order-2 md:order-1 mt-8 md:mt-0 text-white"> &copy; Close Crop 2023. </p>
            <div className="order-1 md:order-2">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Contact us</span>
                <span className="px-2 border-l">Privacy Policy</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer
