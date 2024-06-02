import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/context";
import PhoneIcon from '@mui/icons-material/Phone';
export default function ContactUs(){

    

  const {CopyToClipBoard} = useContext(GlobalContext)
    // console.log(text);

    return(
        <div>
          <div className=" w-full h-48 bg-slate-200 flex items-center">
            <h1 className="p-5 text-3xl font-semibold flex items-center pl-24 ">Contact</h1>
          </div>
          
          
       

         <div className="flex justify-around p-10">
      <div className="ml-10">
      <div className="flex  text-xl font-medium  mb-10">
         Customer Service
         </div>
        <div className="mb-5 flex">
          <p>Phone: <span className="cursor-pointer text-blue-500"
            onClick={() => { CopyToClipBoard("(123) 456-7890") }}
          >(123) 456-7890</span></p>
        </div>

        <div className="mb-5 flex">
          <p>Email: <span className="cursor-pointer text-blue-500"
            onClick={() => { CopyToClipBoard("support@roadstarrental.com") }}
          >support@roadstarrental.com</span></p>
        </div>

        <div className="mb-5 flex cursor-pointer">
          <span onClick={()=>{CopyToClipBoard("1234 Rental Avenue, Suite 567, Numa, Arizona, 567686")}}>1234 Rental Avenue, Suite 567, Numa, Arizona, 567686</span>
        </div>
      </div>

    

      <div className="ml-10 flex flex-col justify-center">
        
        <form className="flex flex-col items-start w-full">
          <label className="mb-4 w-full">
            <span className="block text-left font-medium">Name:</span>
            <input type="text" className="border p-2 mt-1 w-full h-17 bg-slate-50" required 
            />
          </label>
          <label className="mb-4 w-full">
            <span className="block text-left font-medium">Email:</span>
            <input type="email" className="border p-2 mt-1 w-full h-17 bg-slate-50" required />
          </label>
          
          <label className="mb-4 w-full">
            <span className="block text-left font-medium">Message:</span>
            <textarea className="border p-2 mt-1 w-full h-17 bg-slate-50" rows="4" required></textarea>
          </label>
          <button type="submit" className="bg-black text-white p-2 mt-3 w-full">Send Message</button>
        </form>
      </div>
    </div>
    
    <div className=" flex  justify-center">
           
            <span className="mt-3 flex">For quick answers to common questions, please visit our<Link to={'/FAQs'} className=" cursor-pointer underline ml-1"> FAQ page.</Link> </span>
           </div>

         
           

           
           <div className=" min-w-fit min-h-fit bg-gray-200"> 
  <p className="mt-8 italic pt-8">*Our office hours are 9 AM to 6 PM, Monday through Friday. We recommend scheduling an appointment for a more personalized experience.</p>

  <div className="flex gap-20 justify-evenly mt-8" >

    <div className="">
      1234 Rental Avenue, Suite 567, Numa, Arizona, 567686
    </div>
    <div>
      terms & conditions
    </div>
    <div>
      <Link to={'/FAQs'} className="cursor-pointer underline font-medium">FAQ page</Link> 
    </div>
  </div>
  <div className=" w-full h-0.5 bg-black mt-8 ">

  </div>
           
  <div className="min-w-fit text-xs  pb-5 min-h-fit bg-gray-200  mt-6 flex justify-center">
    <div>
      © Designed By Raj Waghmare
    </div>
  </div> 
</div>
     

     
          
         
           

            
                
                
                           




                
           

            

          
           


          </div>

        

       
    )
}