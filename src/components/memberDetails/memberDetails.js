import React, { useState } from 'react';
import { postMember } from '../../API/memberDetails'; 
//import { useNavigate } from 'react-router-dom';

export default function MemberDetails() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Id, setId] = useState("");
    const [HMO, setHMO] = useState("");
  
   
    

    const handleSubmit = async e => {
        e.preventDefault();
        const member =({
            firstName,
            lastName,
            Id,
            HMO,
           
        });
        await postMember(member)    
    }
    // const navigate=useNavigate();
    // const MoveToContact = () =>{
    //     navigate("/")
    // }

    return (
        <div className="signUp-wrapper">
                <h1>פרטים אישיים</h1><br></br>
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
                    תעודת זהות
                    <input onChange={(e) => setId(e.target.value)}></input><br></br><br></br>
                </label>
                <label>
                    קופת חולים
                <select name="HMO" onChange={(e) => setHMO(e.target.value)}>
                <option value="Leumit">לאומית</option>
                <option value="Meuchedet">מאוחדת</option>
                <option value="Clalit">כללית</option>
                <option value="Macabi">מכבי</option>
                </select>
                </label><br></br><br></br>
                         
                <button type="submit">שמירה</button>
                {/* <button onClick={}>עדכון</button> */}

            </form>
        </div>
    )

}
