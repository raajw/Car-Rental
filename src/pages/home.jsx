import { useContext, useRef } from "react";
import ImagesScroll from "../components/homeimages/images";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/context";
import FAQs from "./faq";
import BrowseImages from "../components/browseImages/browseimages";
export default function Home(){

    const locationUseRef = useRef(null)
    const sDateRef = useRef(null)
    const eDateRef = useRef(null)
    const {location,setLocation,carType,CopyToClipBoard,setCarType,startDate,setStartDate,endDate,setEndDate} = useContext(GlobalContext)

    console.log(location,carType,startDate,endDate);

   

    return (
        <div>
            <div className="flex  gap-5 justify-evenly mt-30 pt-10 ">
            <div onClick={()=>{
                locationUseRef.current.focus()
            }}
            className=" cursor-pointer"
            >Pick-Up</div>
            <input type="text"
            ref={locationUseRef}
            onChange={(e)=>{setLocation(e.target.value)}}
            className=" bg-gray-200 rounded-md"
            />

            <div>
                Select Car
            </div>
            <select name="car" onChange={(e)=>{setCarType(e.target.value)}}>
            <option value="mini">Mini</option>
            <option value="sedan">Sedan</option>
            <option value="suv">Suv</option>
            <option value="luxury">Luxury</option>
            <option value="minivan">Mini Van</option>
            <option value="minitruck">Pick-up Truck</option>
            <option value="passengervan">Passenger Van</option>

            </select>
            <div onClick={()=>{
                  if (sDateRef.current) {
                    sDateRef.current.showPicker()
                  }
            }} 
            className=" cursor-pointer"
            >Start Date</div>
            <input type="date" name="" id="" ref={sDateRef} onChange={(e)=>{setStartDate(e.target.value)}}/>
            <div 
            className=" cursor-pointer"
            onClick={()=>{
                if(eDateRef.current){
                    eDateRef.current.showPicker( ) 
                }
                
            }}
            >End Date</div>
            <input type="date" name="" id=""  ref={eDateRef}
            onChange={(e)=>{setEndDate(e.target.value)}}
            />
            <Link to={"/registration"} >Search</Link>
          
            </div>
            <div className="h-0.5 w-full bg-black mt-5">

            </div>

            <div>
                {/* <ImagesScroll/> */}
                <BrowseImages carType={carType}/>
            </div>

                       {/* start of review */}
            


            <div className="flex flex-col justify-center items-center bg-gray-200 mt-10 ">
                <div className="Client's Testimonia mt-8 mb-8  font-semibold text-xl flex  justify-center items-center ">
                Clients Reviews Clients Reviews
            </div>
                <div className=" w-5/6 h-28 text-gray-500  flex items-center justify-center mb-10 rounded-lg">
                Explore the transformative impact we've had on our clients by delving into their heartfelt testimonials. Our clients have firsthand experienced the exceptional service and remarkable results we provide, and they're excited to share their glowing experiences with you.
                </div>

            <div className="flex justify-center gap-10 mb-20">
                    <div className=" flex flex-col justify-center pt-10 w-96 h-80 bg-white rounded-lg hover:text-white hover:bg-black ">
                        <div>
                        "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "
                        </div>
                        <div className="flex justify-center pt-10">
                            - Shubham Yadav
                        </div>
                       

                    </div>
                    <div className=" flex flex-col justify-center  w-96 h-80 bg-white pt-10 rounded-lg hover:text-white hover:bg-black">
                    <div>
                        "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "
                        </div>

                        <div className="flex justify-center pt-10">
                            - Rahul Acharya
                        </div>

                    </div>

            </div>
           
            </div>
          

           {/* end of reviews */}
         



            <div className="flex justify-center mb-20">
               
                <FAQs/>
            </div>

           

<div class="h-fit bg-gray-200  flex flex-col">
  
  <div  className="mt-8">
    <div className="flex pl-8">
    1234 Rental Avenue, Suite 567, Numa, Arizona, 567686
    </div>
    <div className="flex pt-8 pl-8 w-40">
    (123) 456-7890
    </div>
    <div className="flex pt-8 pl-8 w-40">
    support@roadstarrental.com
    </div>


  </div>
  

  <div className="   text-xs mt-10 flex pt-8 justify-center " >Search for cheap hire cars with RoadStar Rentals and hire a car that suits you best. RoadStar Rentals offers a wide selection of cars to help you find and book the best hire car deal.

</div>
<div className=" cursor-pointer text-xs  flex justify-center gap-7 mt-8 pt-7">
    <span>Privacy</span>
    <span>Terms & Conditions</span>
    <span>©2024 RoadStar Rentals</span>
</div>

<div className=" h-fit w-full bg-gray-200  mt-8 pb-4  ">
    <div className="h-0.5 w-full bg-black"> </div>
    <div className=" pt-6   text-xs  flex justify-center">©Designed By Raj Waghmare</div>

</div>

</div>

            
            
        </div>
    )
}