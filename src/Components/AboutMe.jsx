

const AboutMe = () => {
  return (
    <div className="bg-lightBlackColor text-white mt-4 flex flex-col md:p-12">
        <h1 className="text-4xl font-bold m-4">About Me</h1>
        <p className=" text-xl m-4 font-medium">A Creative Frontend Developer Based In Tehran.</p>
        <p className="m-4 font-extralight">Hi! My name is amir. I am a Web Developer, and I'm very passionate and dedicated to 
            my work. Specializing in HTML, CSS, JavaScript, React and Tailwind CSS, I create 
            visually stunning and functiional websites and applications. I am excited about
             the opportunity to collaborate with forward-thinking companies and bring fresh 
             perspectives to their teams. If you’re looking for a dedicated and
              motivated developer who is committed to excellence and growth, let’s connect!
        </p>
        <ul className="m-4">
            <li className="mb-2">
                <span className="mr-4 font-bold text-xl text-redColor">Birthday:</span> 01.03.2003
            </li>
            <li className="mb-2">
                <span className="mr-4 font-bold text-xl text-redColor">Age:</span> 21
            </li>
            <li className="mb-2">
                <span className="mr-4 font-bold text-xl text-redColor">Email:</span> khanalizadehamirhosein@gmail.com
            </li>
            <li className="mb-2">
                <span className="mr-4 font-bold text-xl text-redColor">Phone:</span> +98 919 764 1253
            </li> 
        </ul>

        <h1 className="text-4xl font-bold m-4 mt-20 ">
            <span className="border-b-2 border-redColor my-2">Coding Skills</span>
        </h1>

        <div className="m-4 mt-10">
            <div className="flex items-center justify-between font-bold text-lg mb-1">
                <h1>HTML / CSS</h1>
                <h1>90%</h1>
            </div>
            <div className="bg-white  h-4 rounded-full flex">
                <div className="bg-redColor w-[90%] h-full rounded-full"></div>
            </div>
        </div>
        <div className="m-4 mt-10">
            <div className="flex items-center justify-between font-bold text-lg mb-1">
                <h1>TAILWIND CSS</h1>
                <h1>75%</h1>
            </div>
            <div className="bg-white  h-4 rounded-full flex">
                <div className="bg-redColor w-[75%] h-full rounded-full"></div>
            </div>
        </div>
        <div className="m-4 mt-10">
            <div className="flex items-center justify-between font-bold text-lg mb-1">
                <h1>JAVASCRIPT</h1>
                <h1>60%</h1>
            </div>
            <div className="bg-white  h-4 rounded-full flex">
                <div className="bg-redColor w-[60%] h-full rounded-full"></div>
            </div>
        </div>
        <div className="m-4 mt-10">
            <div className="flex items-center justify-between font-bold text-lg mb-1">
                <h1>REACT</h1>
                <h1>50%</h1>
            </div>
            <div className="bg-white  h-4 rounded-full flex">
                <div className="bg-redColor w-[50%] h-full rounded-full"></div>
            </div>
        </div>
        <div className="m-4 mt-10">
            <div className="flex items-center justify-between font-bold text-lg mb-1">
                <h1>TYPESCRIPT</h1>
                <h1>50%</h1>
            </div>
            <div className="bg-white  h-4 rounded-full flex">
                <div className="bg-redColor w-[50%] h-full rounded-full"></div>
            </div>
        </div>



    </div>
  )
}

export default AboutMe