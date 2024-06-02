
import {Link} from 'react-router-dom'
export default function Landing(){
    return(
        <div>

              

            <div className="flex gap-6 px-5 cursor-pointer   bg-black text-white w-full h-16 items-center">
            <div>
                <h1 className=" uppercase font-extrabold ml-10 pl-10 ">
                    <Link to={'/'}> Car Rental </Link>
                    </h1>
              </div>

            <Link to={'/'} 
            
            >
                Home
            </Link>
            <Link to={'/contact'} >
                Contact-Us
            </Link>
            <Link to={'/services'} >
                Services
            </Link>
            <Link to={'/browsecars'} >
                Browse Cars
            </Link>
            </div>
           
        </div>
    )
}