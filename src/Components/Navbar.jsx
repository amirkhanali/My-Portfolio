
import myImage from "../assets/my-image.jpg"


import { ReactTyped } from "react-typed";


const Navbar = () => {
  return (
    <div className=' h-screen flex flex-col justify-center items-center text-white w-full p-5'>

        <div className='relative m-2' >
          <img src={myImage} className='w-52 h-52 rounded-full mb-4'/>
          <ReactTyped
            strings={[
            "I'm Amirhosein Khanalizadeh",
            "I'm a Frontend Developer",
            "Lives In Tehran",
            ]}
           typeSpeed={30}
            backSpeed={40}
            loop
            />
        </div>



        <div className='flex flex-col items-center '>
          <p className='mb-2'>Im a Junior Frontend Developer based in Tehran.</p>
          <p className='mb-2'>I strive to build creative web
            applications through carefully crafted code and user-centric design.
          </p>

          <div className="flex flex-col text-white space-x-0 sm:flex-row items-center sm:space-x-4 ">
            <a className='bg-redColor m-1 p-1 hover:bg-transparent w-32 text-center border-2 border-redColor ' href="#">About Me</a>
            <a className='border-2 border-redColor m-1 p-1 hover:bg-redColor w-32 text-center' href="#" >My Portfolio</a>
          </div>
        </div>
    </div>
  )
}

export default Navbar