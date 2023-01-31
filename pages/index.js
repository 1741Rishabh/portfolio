import Head from 'next/head'
import Homemodulecss from '../styles/Home.module.css'
import PHeader from '../src/components/PHeader/PHeader'
import WelcomeScreen from '@/src/components/WelcomeScreen/WelcomeScreen'
import ProjectCard from '@/src/components/ProjectCard/ProjectCrad'
import data from '../src/Data/projectdata';
import { FaReact, FaCoins } from "react-icons/fa";
import { VscFold } from "react-icons/vsc";
import TechnologiesCard from '@/src/components/TechnologiesCard/TechnologiesCard'
import Journey  from '@/src/components/Journey/Journey'
import journeydata from "../src/Data/journey"
import Footer from '@/src/components/Footer/Footer'

export default function Home(props) {
 
  const tectdata = [
    {
      "id": 1,
      "logo": <FaReact />,
      "area": "Front-End",
      "teckname": "React.js",
    },
    {
      "id": 2,
      "logo": <FaCoins />,
      "area": "Back-End",
      "teckname": "Node and Databases",

    },
    {
      "id": 3,
      "logo": <VscFold />,
      "area": "UI/UX",
      "teckname": "tools like Figma",
    }
  ]

  const arrdata = data.map((item) => {
    return <ProjectCard key={item.id} img={item.image} desc={item.desc} projectname={item.projectname} />
  })
  const arrOfTech = tectdata.map((item) => {
    return <TechnologiesCard key={item.id} logo={item.logo} area={item.area} teckname={item.teckname}></TechnologiesCard>
  })

  const journay = journeydata.map((item)=>{
    return <Journey key={item.id} year={item.year} journay={item.journay}></Journey>
  })

  return (
    <>
      {/* header or navbar  */}

      <PHeader />

      {/* greeting message  */}
      <div className='relative'>
        <svg height="100%" width="100%" viewBox="0 0 100 50">
          <defs>
            <linearGradient id="geffect">
              <stop offset="0%" stopColor="#a619a3" />
              <stop offset="100%" stopColor="#8f1bb4" />
            </linearGradient>
          </defs>
          <rect className={Homemodulecss.svgcolour} width="100" height="20" d="m 0 0 " />
          <path className={Homemodulecss.svgcolour} d="m 0 20 c 0 0 ,20 40 ,100 0" />
        </svg>

        <div className=' absolute top-10 z-20 mx-24  text-white  w-9/12'>

          <div className='grid grid-cols-3 '>
            <div className=' col-span-2 '>
              <WelcomeScreen />
            </div>
            <div className=''>

            </div>
          </div>
        </div>
      </div>

      {/* project section  */}
      <div className='mx-24 '>
        <h1 className='text-6xl font-medium font-serif mb-4'>
          Projects
        </h1>
        <div className='grid grid-cols-1 gap-1 gap-y-4 md:grid md:grid-cols-3 md:gap-4  md:gap-y-8'>
          {arrdata}
        </div>

      </div>


      {/* Technologies */}
      <div className='mx-24 mt-10 '>
        <h1 className='text-6xl font-medium font-serif mb-4'>
          Technologies
        </h1>
        <div className=''>
          <p className=' font-serif text-2xl '>
            I&#39;ve worked with a range a technologies in the web development <br></br> world. From Back-end To Desian
          </p>
          <div className=' flex justify-between mt-10 mr-20 '>
            {arrOfTech}
          </div>

        </div>

      </div>

      {/* About */}
      <div className='mx-24 mt-10 '>
        <h1 className='text-4xl font-bold font-serif mb-4'>
          About Me
        </h1>
        <p className='font-serif text-xl'>
          As a full stack developer, I have a strong background in web development and a passion for creating dynamic and engaging user experiences. I am experienced in a variety of programming languages such as JavaScript, Python, and Java, as well as front-end technologies like HTML, CSS, and React.js. Additionally, I have experience working with back-end technologies such as Node.js, Express, and databases such as MySQL, MongoDB and Firebase.
        </p>

        {/* journey code year div */}
        <div className='flex justify-between mx-20'>
          {journay}
        </div>
      </div>

      {/* Personal Acomplishments */}
      {/* <div>
        <div>
          <h1>Personal Acomplishments</h1>
        </div>
      </div> */}


      {/* footer */}
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-sm mt-20 '>
      <Footer/>
      </div> 










    </>

  )
}


