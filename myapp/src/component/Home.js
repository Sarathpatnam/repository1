import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import FormRendering from './FormRendering';
import ListRendering from './ListRendering';

export default function Home() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
            <Route path="aa" element={<Main/>}></Route>
                <Route path="aab" element={<FormRendering/>}></Route>
                
            
              
                </Routes>
                </BrowserRouter>
        </div>
     
    
    )
}
function Main(){
    return(
        <>
        <h1> Home</h1>
        <link to="/login"><button>Login</button></link>
        </>
    )
}