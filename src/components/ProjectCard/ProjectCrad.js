export default function ProjectCard(props)
{
   
    return(<>
    <div className="md:max-w-sm md:rounded md:overflow-hidden md:shadow-lg ">
  <img className="w-full" src={`/${props.img}`} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className=" font-bold text-xl mb-2">{props.projectname}</div>
    <p className="  text-gray-700 text-base">
      {props.desc}
    </p>
  </div>
  <div className=" pt-2  px-6 md:pt-4 pb-2">
    <button className="font-bold text-white p-1 bg-slate-400 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">Sourse Code</button>
    
  </div>
</div>
    
    </>)
}