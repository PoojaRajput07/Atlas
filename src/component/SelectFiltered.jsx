import "../../src/CountryList.css"
export const SelectFilter=(({ filter,setFilter})=>{
    const handleFilter=(e)=>{
        setFilter(e.target.value);


    }
    return(
        <select className="select-box" value={filter}onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            {/* <option value="America">America</option> */}
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option vlaue="Oceania">Oceania</option>
        </select>

    )
})