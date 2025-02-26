 import Button from "./components/button/Button"
 import { useState } from "react";
 import {BrowserRouter,Route,Routes} from "react-router-dom";
 import Home from "./pages/home";
 import About from "./pages/about";
 import Login from "./pages/Login"
 import Contact from "./pages/contact";

 import { Navigate } from "./components/navigate/Navigate";
 
 function App(){
  const[state,setstate]=useState("not clicked")
  const whenClicked=()=>{
    setstate("button clicked")
  }
  return(
     
    <div className="App" style={{height:"100vh",width:"100vw"}}>
      <Navigate/>
    
     
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/log" element={<Login/>}/>
      </Routes>
     
    </div>
    
  );
 }
 export default App