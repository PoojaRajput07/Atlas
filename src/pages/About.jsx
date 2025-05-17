import { useEffect, useState } from "react"
import countryFacts from "../api/countryFact.json"
import { FactsList } from "../component/FactsList"
import "../../src/about.css"

export const About=()=>{
    const[facts,useFacts]=useState([])
    useEffect(()=>{
        useFacts(countryFacts);

    },[])
    return(
        <>
        <div className="container">
            <div className="heading">
            <h1>Here are the interesting Facts we're proud of </h1>
            </div>
            <div  className="about-box-section">
                <ul className="facts-outer">
                    {countryFacts.map((curElem)=>{
                        return <FactsList curFact={curElem} key={curElem.id}/>
                    })}
                </ul>
                
            </div>
        </div>
        </>

    )
}