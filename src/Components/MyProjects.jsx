import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MyProjects = () => {
  return (
    <div className='bg-blackColor text-white flex items-center flex-col md:p-12  '>
        <h1 className="text-4xl font-bold m-4 items-center">My Projects</h1>

        <div className="m-4 flex flex-col  sm:grid sm:grid-cols-2 sm:gap-4">
            <div className="w-[200px] mt-4 bg-lightBlackColor rounded-full">
                <h1 className="px-3 font-bold flex justify-between">To Do List 
                    <a href="https://github.com/amirkhanali/ToDoList" target="_blank">
                        <FontAwesomeIcon className='cursor-pointer' icon={faGithub}/>
                    </a>
                </h1>
            </div>            
            <div className="w-full mt-4 bg-lightBlackColor rounded-full">
                <h1 className=" px-3 font-bold flex justify-between">StarWar Search 
                    <a href="https://github.com/amirkhanali/StarWar" target="_blank">
                        <FontAwesomeIcon className='cursor-pointer' icon={faGithub}/>
                    </a>
                </h1>
            </div>            
            <div className="w-full mt-4 bg-lightBlackColor rounded-full">
                <h1 className="px-3 font-bold flex justify-between">Movie Search
                    <a href="https://github.com/amirkhanali/Movie-Search" target="_blank">
                        <FontAwesomeIcon className='cursor-pointer' icon={faGithub}/>
                    </a>
                </h1>
            </div>            
            <div className="w-full mt-4 bg-lightBlackColor rounded-full">
                <h1 className="px-3 font-bold flex justify-between">Recipe Finder
                    <a href="https://github.com/amirkhanali/Recipe-Finder" target="_blank">
                        <FontAwesomeIcon className='cursor-pointer' icon={faGithub}/>
                    </a>
                </h1>
            </div>            
        </div>


        
    </div>
  )
}

export default MyProjects
