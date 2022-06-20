
 import { loginUser } from '../../API/login';
// import { getApartmentsArray } from '../../API/apartmentsArray';
import React, { useState } from 'react';
import  { useEffect } from 'react';
import './apartmentsArray.css';
import { useNavigate } from 'react-router-dom';

export default function ApartmentsArray() {
    const [data, setData] = useState([]);
    useEffect(() => {
      var apartments = loginUser();
      setData(apartments)
    }, []);
    
    const navigate=useNavigate();
    
    const addUser = () =>{
        navigate("/SignUp")
    }
    const addMember = () =>{
        navigate("/memberDetails")
    }

    return (
        <div>
        <h1>איתור מטופלים</h1>
        
        <button onClick={addUser} className='addUserB'>להוספת מדריכה</button><br/><br/>
            
        <button onClick={addMember} className='addUserB'>להוספת חניכה</button>

        <table>           
            <thead>
            <tr> 
                <th>שם</th>       
                <th>משפחה</th>
                <th>תעודת זהות</th>
                <th>דירה</th>
                <th>קופ"ח</th>
                <th>עריכת פרטים</th>
                <th>תורים</th>
            </tr>         
            </thead>
            <tbody>
                    {
                        Object.keys(data).map((item) => (
                            <tr key={item.id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.firstName}</td>
                                <td>{item.firstName}</td>
                                <td>{item.firstName}</td>
                                <td>{item.firstName}</td>
                                
                                {/* //<td><a href="http://localhost:3000/memberDetails">Visit W3Schools</a></td> */}
                                <td/>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
       
    </div>
    );
    }





