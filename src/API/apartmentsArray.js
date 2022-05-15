const getApartmentsArray=(id) =>{
   return fetch(`http://localhost:2623/user/?id=${id}`)
   .then(Response => {
    if (Response.ok && Response.status === 200) {
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


