
export  function  getApartmentsArray(id) {
   return fetch(`http://localhost:2626/user/?id=${id}`)
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

//     var data
//     try {
//         var response= fetch(`http://localhost:2626/user/?email=${email}&password=${password}`)
//    if(response.ok)
//    {
//         data=response.json()
//    }
//     } catch (error) {
//         alert("אינך רשומה במערכת שלנו");
//     }
   
//    return data



