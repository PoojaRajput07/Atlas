import { Header } from "../component/header"
import { Footer }from "../component/Footer"
import { Outlet } from "react-router-dom"
import "../../src/AppLayout.css"
export const AppLayout=()=>{
    return(
        <>
        <div className="wrapper">
        <Header/>
        <main className="content">
        <Outlet/>
        </main>
        <Footer/>
        </div>
        
        </>
    )
}