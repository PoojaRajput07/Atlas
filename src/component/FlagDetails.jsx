import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getDetails } from "./FlagApi";
import "../../src/CountryList.css"

import MoonLoader from "react-spinners/MoonLoader";
export const FlagDetails=()=>{
    const [error,setError]=useState(null);
const[loading,setLoading]=useState(true);
    const param=useParams();
    console.log(param);
    const[details,setDetails]=useState([]);
    useEffect(()=>{
        const flagInfo=async()=>{
        try{
            setLoading(true);
         const res=await getDetails(param.id);
         console.log(res.data);
         if(res.status===200){
            setDetails(res.data);
            setLoading(false);
         }
         
        }
        catch(error){
            <h1>{error}</h1>
            setLoading(false);
            setError(error);
        }


    }
    flagInfo();
    },[param.id])
    const navigate=useNavigate();
    const handleBack=()=>{   
    return navigate(-1);
    }
    
    
    return(
        <>
        <div className="flag-detail-outer" >
        <ul>
            <div  >
            {
                loading?<MoonLoader  color="silver" size={30}/>:error?<h1>{error}</h1>:
                details.map((curElem,index)=>{
                    const{name,population,region,subregion,capital,currencies,languages,borders,flags}=curElem;
                    return(
                        <li key={curElem.name} className="details">
                            <div className="detail-img">
                                  <p><img src={flags.png} className="detail-img-box"/></p>
                            </div>
                            <div className="detail-info">
                            <p>name:{name.common}</p>
                            <p>capital:{capital}</p>
                            <p>population:{population}</p>
                            <p>region:{region}</p>
                            <p>subregion:{subregion}</p>
                            <p>Common Name:{
                                Object.keys(name.nativeName).map((curElem)=>
                                name.nativeName[curElem].common).join(",")}</p>
                        
{/*                             
                            {Object.keys(name.nativeName).map((curElem)=>{
                                return(
                                    <p key={curElem}>common name:{name.nativeName[curElem].common}</p>
                                )
                            })} */}
                            <p>currencies:{Object.keys(currencies).map((curElem)=>currencies[curElem].name).join(",")}</p>

                            <p>Languages:{Object.keys(languages).map((curElem)=>languages[curElem]).join(",")}
                            </p>
                              
                                
                                
                               

                             </div>
                            {/* <p>{languages}</p> */}
                            </li>
                    )

        })
            }
            </div>
        </ul>
        
        <button className="detail-btn" onClick={handleBack}>Go Back</button>
        </div>
    
        
        </>
    )
}