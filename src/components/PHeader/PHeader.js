import Image from "next/image";
import Link from "next/link";
import Navbarcss from '../../../styles/Navbar.module.css';

import { FaBeer,FaGithub,FaLinkedinIn,FaInstagram } from 'react-icons/fa';

function PHeader()
{
return(    
<nav className={`${Navbarcss.navbarcolour} ${Navbarcss.box} md:bg-blue-900 md:h-12   `}>
    <div className="flex justify-between mx-10">
        
        <div className="md:flex md:items-center">
            <Link href="/"><Image className=" w-10 h-auto " src="/logo.jpg" alt="logo" width={100} height={100} /></Link>
            
        </div>
        <div className="md:flex md:items-center ">
            <span className="md:mr-12 text-white"><Link href='/'>Project</Link></span>
            <span className="md:mr-12 text-white"><Link href='/'>Technologies</Link></span>
            <span className="md:mr-12 text-white"><Link href='/'>About</Link></span>
        </div>
        <div className="md:flex md:items-center text-white">
            <Link className="md:ml-5" href='/'><FaGithub/></Link>
            <Link className="md:ml-5" href='/'><FaLinkedinIn/></Link>
            <Link className="md:ml-5" href='https://www.instagram.com/rishabh_kumar_1741/'><FaInstagram/></Link>
           
        </div>
     
    </div>
</nav>)
}
 export default PHeader;