// import {connect} from "react-redux";
// import { saveEmail, savePassword } from "../action";


export  function loginUser(email, password) {
    var data
    try {
        var response= fetch(`http://localhost:2626/user/?email=${email}&password=${password}`)
   if(response.ok && Response.status === 200)
   {
        data=response.json();       
   }
   else{
       debugger
    alert("אינך רשומה במערכת שלנו");
data="empty"
   }
    } catch (error) {
        alert("ffff");
    }
   debugger
   return data
//    return fetch(`http://localhost:2626/user/?email=${email}&password=${password}`)
//     .then(Response => {
//         if (Response.ok && Response.status === 200) {
//             alert("התחברת בהצלחה מיד נכניס אותך פנימה");
//             return Response.json();
//         }
//     })
//     .then(data => {
//         if (data) {
           
//         } 
//         else {
//             alert("אינך רשומה במערכת שלנו");
//         }
//     });
}