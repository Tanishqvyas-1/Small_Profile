
import React from "react"
import    {createRoot} from "react-dom/client"
import Info from "./Info"
import "./project1.css"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

function Project(){
  return(
   <>
    
    <Info/>
   
    <About/>
    <Interests/>
    <Footer/>
    </>
  )
}

const rr=createRoot(document.getElementById('root'))
rr.render(
  <>
    <Project/>
 </>
)