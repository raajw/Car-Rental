import { useContext, useState } from "react"
import { GlobalContext } from "../Context/context"
import myImage from "../components/myimages"
import {Link} from "react-router-dom"

export default function Registration(){

    

    const{carType,setCarType,setLocation,setStartDate,setEndDate,location,startDate,endDate} = useContext(GlobalContext)

    const[complete,setComplete]=useState(false)

    function handleSubmit(){
        alert("Thank you for your submission! Your car rental details have been successfully received.Kindly check your email for confirmation.");
        setCarType("");
        setEndDate("")
        setLocation("");
        setStartDate("");
        setComplete(true)
        

    }

    return (
        <div>
            {
                complete ?
                    <div>

                        <div className="flex justify-center place-content-center mt-26 pt-8 ">Your Submission has been successfull. Kindly check your email for confirmation.

                        </div>
                    
                    <Link to={"/"}  > <button className="w-40 h-8 rounded-md bg-slate-400 cursor-pointer  
                     
                    ">Go to Home Page</button></Link>

                    </div>
               
               
               
               
                :
                <div>
             <div className="flex space-x-8 justify-evenly">
            <div className="flex justify-center items-center">
 
            <div className=" w-96 h-96 bg-slate-200 shadow-md rounded-lg p-6"   >
        <p>Location:{location}</p>
        <p>Car Selected:{carType}</p>
        <p>Pick-up Date:{startDate}</p>
        <p>Drop Date:{endDate}</p>
        <br />

        <img src={myImage[carType]} alt={carType}  />

        



       
        
      </div>

           

            </div>
            <br />
            <br />
            <div className="flex justify-center items-center">
    <div className="w-96 h-auto bg-slate-200 shadow-md rounded-lg p-6">
        <h1>Personal Information</h1>
        <form action="" className="mb-6" > 
            <div className="mb-4">
                <input type="text" name="name" placeholder="Enter Your Name" className="w-full text-center rounded-md" required />
            </div>
            <div className="mb-4">
                <input type="radio" name="age" id="age" value={18} disabled  checked/>
                <label htmlFor="age">18 and above</label>
            </div>
            <div className="mb-4">
                <input type="tel" name="phone" id="phone" required className="w-full text-center rounded-md" placeholder="Enter Phone No." />
            </div>
            <div className="mb-4">
                <input type="email" name="email" id="email" required className="w-full text-center rounded-md" placeholder="Enter Email" />
            </div>
            <div className="mb-4">
                <input type="text" name="address" id="address" placeholder="Enter Address.." className="w-full text-center rounded-md"  required/>
            </div>
            <div className="mb-4">
                <input type="text" required placeholder="City.." className="w-full text-center rounded-md "  />
            </div>
            <div className="mb-4">
                <input type="number" required name="zipcode" className="w-full text-center rounded-md" placeholder="Enter Zipcode.." />
            </div>
            <div className="mb-10">
                <button type="submit" className=" w-40 h-8 rounded-md bg-slate-400" onClick={handleSubmit}>Confirm Details</button>
            </div>
        </form>
        
    </div>
</div>

            
     
        
    </div>
          </div>
            }
        </div>
          
       
    )
}