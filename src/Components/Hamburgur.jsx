import  {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser,faHome, faBriefcase, faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import myImage from "../assets/my-image.jpg"
import { faLinkedin, faGithub, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Hamburgur = () => {


    const [isOpen, setisOpen] = useState(false);

    const toggleHam = () => {
        setisOpen(!isOpen);
    }


    return (

        <div >
            <div className="absolute top-0 left-0 m-4">
                <div onClick={toggleHam} className="bg-redColor p-2 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </div>
            </div>

            <div className='text-white '>
                {isOpen && (

                    <div className="fixed top-0 left-0 w-full bg-lightBlackColor h-full flex flex-col p-10 items-start justify-between  md:w-1/3" >
                        <div className='absolute top-0 left-0 m-4'>                        
                            <FontAwesomeIcon icon={faTimes} onClick={toggleHam} className='cursor-pointer' /> 
                        </div>
                        <div className='flex flex-col items-start '>
                            <img src={myImage} className='w-36 h-36 rounded-full mb-4'/>
                            <h1 className=' font-bold'>Amirhosein Khanalizadeh</h1>
                            <p className=' mb-3 font-extralight'>Junior Frontend Developer</p>
                            <div className='space-x-3'>
                                <a href="#" className="cursor-pointer" target='_blank'>
                                    <FontAwesomeIcon icon={faYoutube}/> 
                                </a>
                                <a href="https://github.com/amirkhanali" className="cursor-pointer" target='_blank'>
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                                <a href="https://www.linkedin.com/in/amirhosein-khanalizadeh-b94455323/" className="cursor-pointer" target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedin}/> 
                                </a>
                                <a href="https://t.me/AMIRHOSSEIN21KHANALIZADEH" target='_blank' className="cursor-pointer">
                                    <FontAwesomeIcon  icon={faTelegram}/>
                                </a>                                
                            </div>
                        </div>
                        
                        <div className='flex flex-col'>
                            <a href="#" className="m-1" >
                                <FontAwesomeIcon className="mr-2"icon={faHome}/> Home
                            </a>
                            <a href="#" className="m-1">
                                <FontAwesomeIcon className="mr-2"icon={faUser}/> About Me 
                            </a>
                            <a href="#" className="m-1">
                                 <FontAwesomeIcon className="mr-2"icon={faBriefcase}/> My Portfolio
                            </a>
                            <a href="#" className="m-1">
                                 <FontAwesomeIcon className='mr-2' icon={faEnvelope}/> Contact
                            </a>
                            
                        </div>
                  

                    </div>
                )}
            </div>

        </div>

   
    
  )
}

export default Hamburgur





