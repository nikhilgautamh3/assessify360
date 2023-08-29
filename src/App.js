import React from 'react'

import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Admin_portal from './components/admin_portal';
import Help from './components/help';
import About from './components/about';
import Test_portal from './components/test_portal';


const App = () => {
    return(
  
        <>
            
          <Navbar />

   
          <Routes >
            <Route path ="/" element = {<Home />}/>
            <Route path ="/Test_portal" element = {<Test_portal />} />
            <Route path ="/Admin_portal" element = {<Admin_portal />} />
            <Route path ="/help" element = {<Help />} />
            <Route path ="/about" element = {<About />} />
           
            
          </Routes>     
                

            
         
          
         
         
        </>
    )
}

export default App