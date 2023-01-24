export default function ProjectCard(props)
{
   
    return(<>
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
  <img className="w-full" src={`/${props.img}`} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.projectname}</div>
    <p className="text-gray-700 text-base">
      {props.desc}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <button>Sourse Code</button>
    
  </div>
</div>
    
    </>)
}