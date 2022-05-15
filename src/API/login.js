// import {connect} from "react-redux";
// import { saveEmail, savePassword } from "../action";


export  function loginUser(email, password) {
   
    fetch(`http://localhost:2623/user/?email=${email}&password=${password}`)
    .then(Response => {
        if (Response.ok && Response.status === 200) {
            alert("התחברת בהצלחה מיד נכניס אותך פנימה");
            return Response.json();
        }
    })
    .then(data => {
        if (data) {
            //
        } 
        else {
            alert("אינך רשומה במערכת שלנו");
        }
    });
}