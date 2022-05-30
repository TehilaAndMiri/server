import React, { useState } from 'react';
import './login.css';
import { loginUser } from '../../API/login';
import { useNavigate } from 'react-router-dom';

// import { useForm } from "react-hook-form";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faEye } from "@fortawesome/free-solid-svg-icons";
// // const eye = <FontAwesomeIcon icon={faEye} />;


export default function Login() {
  const navigate=useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [data, setData] = useState();

    const handleSubmit = async e => {
      e.preventDefault();       
      var res = loginUser(email, password);    
      setData(res)
      res!=="empty"? navigate("/apartmentsArray", {email:email }, { state: res }):navigate("/");
    // navigate("/apartmentsArray",
    // {state:{email:email ,
    //         password: password
    //        }
    // });
    }

  return(
    <div className="login-wrapper">
    <h1>התחברות</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>שם משתמש</p>
        <input onChange={(e) => setEmail(e.target.value)}></input><br></br><br></br>      
      </label>


      {/* <div className="pass-wrapper">
        <input
          placeholder="Password"
          name="password"
          type="password"
          ref={register({ required: "This is required." })}
        />
        <i>{eye}</i>
      </div> */}

      <label>
        <p>סיסמא</p>
        <input  type={"password"} onChange={(e) => setPassword(e.target.value)}></input><br></br><br></br>      
      </label>
      <div>
        {
        // data==="empty"?
        // <button type="submit" >התחברות</button>:
        <button type="submit" >התחברות</button>
        
        }
      </div>
    </form>
    </div>
  )
}
