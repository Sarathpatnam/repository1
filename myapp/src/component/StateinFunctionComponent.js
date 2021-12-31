import React,{useState} from 'react'
import '../States.css'

export default function StateinFunctionComponent() {
    let [name,updatename]=useState("Sarath P")
    return (
        <div>

                <h1 onMouseOver={()=>{updatename("Sarath p")}} 
                 onMouseLeave={()=>{updatename("Sarath ")}}>
                 {name}
                 </h1>
           
        </div>
    )
}
