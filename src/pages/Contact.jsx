// import { BiAlignJustify } from "react-icons/bi"
import { useState } from "react";
import "../../src/contact.css"

export const Contact=()=>{
    const[data,setData]=useState({
        username:"",
        email:"",
        message:"",
    })
    const handleChange=(e)=>{
        const{name,value}=e.target
            setData((prev)=>({
                ...prev,[name]:value
            }))
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
    


    }
    return(
        <form onSubmit={handleFormSubmit}className="container">
            <div className="form-heading">
                <h1>Contact US</h1>
                <input 
                placeholder="enter your name" 
                name="username"
                 className="input-field"
                 type="text"
                 value={data.username}
                  onChange={handleChange}
                 />
                 <input 
                 placeholder="enter your Email"
                  name="email"
                   className="input-field"
                   type="email"
                   value={data.email}
                  onChange={handleChange}/>
                 <textarea 
                 placeholder="enter your Message" 
                 name="message"
                  className="input-field mssg"
                  rows="10"
                  autoComplete="false"
                  required
                  value={data.message}
                  onChange={handleChange}
                  ></textarea>
                 <button type="submit"className=" send">SEND</button>
                
            </div>
            
            
        </form>
        

    )
}