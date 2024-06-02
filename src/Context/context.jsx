import { createContext, useState } from "react";


export const GlobalContext = createContext(null)

export default function GlobalState({children}){

    const CopyToClipBoard = async(text)=>{
       
        try {
            await navigator.clipboard.writeText(text);
            alert("Text copied to Clipboard!")
            
        } catch (e) {
            console.log("failed to copt text",e);
        }
    }

    const [location,setLocation] =useState("");
    const [carType,setCarType] = useState("mini")
    const [startDate,setStartDate]=useState("")
    const [endDate,setEndDate]=useState("")

    return <GlobalContext.Provider value={{location,setLocation,carType,setCarType, startDate,setStartDate,endDate,setEndDate,CopyToClipBoard}}>{children}</GlobalContext.Provider>
}