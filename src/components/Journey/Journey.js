function Journey (props) {
    return <div className='mt-6 '>
        <div className=''>
            <div className='flex mb-2'>
                <h1 className='font-extrabold text-xl'>{props.year}</h1>
                <span className='w-6 bg-gray-800  h-1 ml-4 mt-1 backdrop-blur-xl'></span>
            </div>
            <p className='font-sans font-medium'> {props.journay}</p>
        </div>
    </div>
}

export default Journey;