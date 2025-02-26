
import {useNavigate} from "react-router-dom";
import '../styles/login.css'
import useStore from "../store/store";

export default function Login()
{
    const{username,handleChangeUsername,toggleLoggedIn}=useStore()
    const navigate=useNavigate()
    function Submit(){ 
        if(username != ""){
            navigate("/");
            toggleLoggedIn();
        }
    }
    return(
        <>
        
        {/*  */}
       
        <div className="login" >
           <div className="title">
                <header className="titleIn">Login</header>

           </div>
           <div className="New-name">
            <input className="New-nameIN" type="text" placeholder="Email or Name" value={username}
                    onChange={handleChangeUsername}/>
           </div>
           <br></br>
           <div className="New-name">
              <input className="New-nameIN" type="password" placeholder="password"/>
                         
           </div>
           <div className="Signin">
           <button className="Signin-1 " onClick={Submit}>Login</button>
           </div>
        </div>
        
        </>
    );
    

}