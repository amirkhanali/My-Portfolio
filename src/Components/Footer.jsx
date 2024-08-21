import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
    return ( 
        <div className='flex flex-col justify-center items-center text-white w-full py-20 space-y-4'>
            <div className="flex justify-around items-center space-x-4">
                <a href="">YOUTUBE</a>
                <a href="https://www.linkedin.com/in/amirhosein-khanalizadeh-b94455323/" target='_blank'>LINKEDIN</a>
                <a href="https://github.com/amirkhanali" target='_blank'>GITHUB</a>
                <a href="https://t.me/AMIRHOSSEIN21KHANALIZADEH" target='_blank'>TELEGRAM</a>
            </div>

            <div className="">
                <p>
                    <FontAwesomeIcon icon={faCopyright}/> <span className='text-redColor px-1'>Amir</span> 
                     personal Portfolio | All RightReserved
                    
                    
                </p>

            </div>
           
        </div>
     );
}
 
export default Footer;