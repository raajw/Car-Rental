import { useEffect, useState } from "react"
import myImages from "../myimages"


export default function BrowseImages({carType}){
    const [srcImg,setSrcImg]=useState("")


    useEffect(() => {
        
        if (carType in myImages) {
            
            setSrcImg(myImages[carType]);
        }
        else{
            console.log("notavailable");
        }
        
    }, [carType]);

    console.log(srcImg);

    console.log(srcImg);
    

    return <div className=" flex justify-center mt-20">
    
        <img src={srcImg} alt="" srcset=""
        width={350}
        height={350}
        
        />
        <div></div>
    </div>
}