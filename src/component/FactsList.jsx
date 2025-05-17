import "../../src/about.css"
export const FactsList=({curFact})=>{
    const{capital,countryName,id,interestingFact,population}=curFact;
    console.log(curFact);
    return(
        <div className="country-details">
        <li style={{listStyle:"none"}}>
            <p style={{fontWeight:"bold"}}>{countryName}</p>
            <p>Capital:<span style={{color: "rgba(228, 231, 233, 0.708)"}}>{capital}</span></p>
            <p>Id:<span style={{color: "rgba(228, 231, 233, 0.708)"}}>{id}</span></p>
            <p>InterstingFacts:<span style={{color: "rgba(228, 231, 233, 0.76)"}}>{interestingFact}</span></p>
            <p>Population:<span style={{color: "rgba(228, 231, 233, 0.708)"}}>{population}</span></p> 
        </li>
        </div>
    )


}