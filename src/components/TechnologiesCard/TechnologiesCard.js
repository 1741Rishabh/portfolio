import {FaReact} from "react-icons/fa";
export default function TechnologiesCard (props) {
    
    return <div>
        <span className='text-4xl'>{props.logo}</span>
        <h1 className='font-bold font-sans text-xl mb-2'>{props.area}</h1>
        <h6 className='font-sans text-md font-medium'>
            Experience with <br></br> {props.teckname}
        </h6>
    </div>
}