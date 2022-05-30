import React, { useState } from 'react';
import './signUp.css';
import { signUpUser } from '../../API/signUp'; 
import { useNavigate } from 'react-router-dom';

export default function SingUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [apartmentId, setApartmentId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const user =({
            firstName,
            lastName,
            apartmentId,
            email,
            password,
            phoneNumber
        });
        await signUpUser(user)    
    }
    const navigate=useNavigate();
    const x = () =>{
        navigate("/ApartmentsArray")
    }

    return (
        <div className="signUp-wrapper">
                <h1>הוספת מדריכה</h1><br></br>
            <form onSubmit={handleSubmit}>
                <label >
                    שם פרטי
                    <input onChange={(e) => setFirstName(e.target.value)}></input><br></br><br></br>
                </label>
                <label>
                    שם משפחה
                    <input onChange={(e) => setLastName(e.target.value)}></input><br></br><br></br>
                </label>
                <label>
                    מזהה דירה
                    <input onChange={(e) => setApartmentId(e.target.value)}></input><br></br><br></br>
                </label>
                <label>
                    אימייל
                    <input onChange={(e) => setEmail(e.target.value)}></input><br></br><br></br>
                </label>
                <label>
                    סיסמא
                    <input type={"password"} onChange={(e) => setPassword(e.target.value)}></input><br></br><br></br>
                </label>
                <label>
                    טלפון
                    <input onChange={(e) => setPhoneNumber(e.target.value)}></input><br></br><br></br>
                </label><br></br>
               {/* <button onClick={x}>הרשמה</button> */}
                              <button type="submit">הרשמה</button>

            </form>
        </div>
    )

}
