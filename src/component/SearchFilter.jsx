export const SearchFilter=({setSortOrder,search,setSearch})=>{
    const handleInput=(e)=>{
        setSearch(e.target.value);


    }
    const handlesorting=(value)=>{
        setSortOrder(value);
        
        }
    
    console.log(search);
    return(
        <>
        <input type="text"className="select-box" placeholder="search" value={search} onChange={handleInput}/>
        <button  className="btn-sort" onClick={()=>{handlesorting("asc")}}>asc</button>
        <button  className="btn-sort" onClick={()=>{handlesorting("des")}}>des</button>
        </>
    )


}