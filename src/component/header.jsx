import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import "../../src/App.css"


import { useState } from "react";

export const Header=()=>{
    const[hamMenu,setHamMenu]=useState(false)
   
    return(
        <>
        <header>
            <div className="header-outer">
                <div className="logo">
                    <h1>WorldAtlas</h1>

                </div>
                <div  className="list">
                    <button className="ham-icon" onClick={()=>setHamMenu(!hamMenu)}>
                        <GiHamburgerMenu size={20}/>
                    </button>
                    
                      
                    
                    <ul className={hamMenu===true?"ham-menu-header":"header-options"}>
                        <li className="box">
                            <NavLink
                             to="/" 
                             style={{textDecoration:"none"}}
                             className={({isActive})=>isActive?"active":""}>Home</NavLink>
                            </li>
                        <li  className="box">
                            <NavLink to="/about" style={{textDecoration:"none"}}>About</NavLink>
                            </li>
                        <li  className="box">
                            <NavLink to="/contact" style={{textDecoration:"none"}}>Contact</NavLink></li>
                        <li  className="box">
                            <NavLink to="/country" style={{textDecoration:"none"}}>country</NavLink></li>
                    </ul>
                </div>
                


            </div>
            
        </header>
        </>
    )
}