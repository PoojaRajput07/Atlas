import "../../src/hero.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { About } from "./About";
import { NavLink } from "react-router-dom";
export const Home=()=>{
    return(
        <>
        <div className="hero-outer">
            <div className="hero-detail">
                <h1>Explore the world,one <br/>country at a time</h1>
                <p>discover the history ,culture and beauty of every nation .sort,search anf filter through 
                    countries to find the detials you need
                </p>
                <NavLink to="/country" style={{textDecoration:"none"}}>
                    <button className="btn"><p>start exploring</p><FaArrowRightLong /></button>
                </NavLink>
                

            </div>
            <div className="hero-pic">
                <img src="3d-icon-traveling-vacation-removebg-preview.png"  className="travel-pic" ></img>

            </div>
        </div>
        <About/>
        </>
    )
}