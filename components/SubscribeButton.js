const SubscribeButton = (props) => {
    const {id, green, orange, blue, red, white, text, type, style, onClick} = {...props};

    return(
        <button
            id={id}
            type={type}
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={onClick}
            className={`inline-block px-8 py-2.5 text-white font-medium text-sm leading-tight uppercase rounded-md shadow-md
            ${green === true ? 'bg-Sage hover:bg-sageAnimate border border-transparent focus:bg-sageAnimate active:bg-sageAnimate' : ''}
            ${orange === true ? 'bg-Orange border border-transparent hover:bg-orangeAnimate focus:bg-orangeAnimate' : ''}
            ${white === true ? 'bg-white text-black border border-grey-700 hover:bg-slate-50 focus:bg-slate-100' : ''}
            ${red === true ? 'bg-red-700 border border-transparent hover:bg-red-800' : ''}
            hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg 
            transition duration-150 ease-in-out ${style}`}
        >
            {text}
        </button>
    );
}

export default SubscribeButton