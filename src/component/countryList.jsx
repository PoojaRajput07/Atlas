import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "../../src/CountryList.css"
export const CountryList=({curCountry})=>{
    const{name,flags,capital,population,region}=curCountry;
   
    
    return(
        <>
        
        <li className="flag-box">
        <img src={flags.png} className="country-img"height="200px" width="250px"></img>
         <h2>{name.common.length>10?name.common.slice(0,11)+"...":name.common}</h2>
         <p><span className="title">Capital:</span>{capital}</p>
         <p><span className="title">Population:</span>{population}</p>
         <p><span className="title">Region:</span>{region}</p>
         <NavLink to={`/country/${name.common}`}>
            <button className="list-btn" >Read More <FaArrowRightLong /></button>
         </NavLink>
         
         </li>
         

        </>
       
    )
    
}