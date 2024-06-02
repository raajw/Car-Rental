import { useState } from "react";
import BrowseImages from "../components/browseImages/browseimages";


export default function BrowseCars(){
    const[carType,setCarType]=useState("sedan")
    console.log(carType);
    return(
        <div>
           
                <h1 className="  h-48 min-w-fit bg-slate-200  items-center flex pl-24  font-semibold text-3xl ">Browse Cars</h1>
            
            
            <div className=" flex gap-28 justify-center pt-16 mt-10 cursor-pointer" >
                <button onClick={()=>{setCarType("mini")}} className="w-24 h-14  rounded-md bg-slate-200 hover:bg-black hover:text-white ">
                    Mini
                </button>
                <button
                className="w-24 h-14  rounded-md bg-slate-200 hover:bg-black hover:text-white "
                onClick={()=>{setCarType("sedan")}}>
                
                    Sedan
                </button>
                <button
                className="w-24 h-14  rounded-md bg-slate-200 hover:bg-black hover:text-white "
                onClick={()=>{setCarType("suv")}}>
                    SUV
                </button>
                <button
                className="w-24 h-14  rounded-md bg-slate-200 hover:bg-black hover:text-white "
                onClick={()=>{setCarType("minivan")}}>
                    MiniVan
                </button>

                <button
                className=" w-28 h-14  rounded-md bg-slate-200 hover:bg-black hover:text-white "
                onClick={()=>{setCarType("minitruck")}}>
                    Pick-up Truck
                </button>
                <button
                className="w-24 h-14  rounded-md bg-slate-200 hover:bg-black hover:text-white "
                onClick={()=>{setCarType("passengervan")}}>
                    Passenger Van
                </button>
                <button
                className="w-24 h-14  rounded-md bg-slate-200 hover:bg-black hover:text-white "
                onClick={()=>{setCarType("luxury")}}>
                    Luxury
                </button>
               

            </div>

            <div className=" justify-center flex gap-20 p-10 mt-16 cursor-pointer">
                <button
                className="w-24 h-14  rounded-md bg-slate-200 hover:bg-black hover:text-white "
                 onClick={()=>{setCarType("compact")}}>

                   Compact 
                </button>
                <button
                className="w-24 h-14  rounded-md bg-slate-200 hover:bg-black hover:text-white "
                 onClick={()=>{setCarType("standard")}}>
                   Standard
                </button>
                <button
                className="w-24 h-14  rounded-md bg-slate-200 hover:bg-black hover:text-white "
                 onClick={()=>{setCarType("fullsize")}}>
                   Full-size
                </button>
                <button
                className="w-28 h-14  rounded-md bg-slate-200 hover:bg-black hover:text-white "
                 onClick={()=>{setCarType("intermediate")}}>
                   Intermediate
                </button>
            </div>

            <div  className=" ">
               
                <BrowseImages carType={carType} 
                
                />
               
                
            </div>
        </div>
    )
}