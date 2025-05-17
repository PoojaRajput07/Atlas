import { useEffect, useState } from "react"
import { CountryList } from "../component/countryList";
import { getFlag } from "../component/FlagApi";
import "../../src/CountryList.css"
import MoonLoader from "react-spinners/MoonLoader";
import { SearchFilter } from "../component/SearchFilter";
import { SelectFilter } from "../component/SelectFiltered";

 

export const Country=()=>{
    const[country,setCountry]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    const[search,setSearch]=useState("");
    const[filter,setFilter]=useState("All");
    const[sortOrder,setSortOrder]=useState("asc");
    

    useEffect(()=>{
        const CountryData=async()=>{
        try{
             setLoading(true);

            const res=  await getFlag();
            console.log(res);
            if(res.status===200){
                 setCountry(res.data);
                 setLoading(false);

            }
            else{
                setError(`loading failed ${res.status}`)
                setLoading(false);
            }
           

        }
        catch(error){
            setError(`fetching failed`)
            setLoading(false);
        }
       

    }
    CountryData();
    },[])


    const searchInput=((curElem)=>{
        
        return curElem.name.common.toLowerCase().includes(search.toLowerCase())}
    )
    const searchSelect=((curElem)=>{
        if(filter==="All"){
            return curElem;
        }
        return curElem.region===filter;

    })
   

    const FilterCountries=country.filter((curElem)=>{
     return searchInput(curElem) && searchSelect(curElem)

    })
    const SortedCountries=[...FilterCountries].sort((a,b)=>{
        if(sortOrder==="asc"){
             return a.name.common.localeCompare(b.name.common);
        
            }
            return b.name.common.localeCompare(a.name.common)
       
    })
    // console.log(FilterCountries);
    // console.log(country);
    


    
    
    return(
        <>
        <div className="country-container">
            <div className="country-input">
                <SearchFilter setSortOrder={setSortOrder} search={search} setSearch={setSearch}/>
               <SelectFilter   filter={filter} setFilter={setFilter}/>
            </div>
            
            {loading?(<MoonLoader  color="silver" size={50} />):error?(<p>{error}</p>):(
                <ul  className="flag-container">
            {SortedCountries.map((curElem)=>{
                return(
                    <CountryList key={curElem.name.common} curCountry={curElem}/>
                )

            })}
        </ul>
            )}
        
        
        </div>

        </>

    )
}
