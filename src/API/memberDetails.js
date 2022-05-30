
export async function postMember(member) {
    return fetch('http://localhost:2626/member/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(member)
    })
    .then(Response => {
      if (Response.ok && Response.status === 200) {
          alert("החניכה נכנסה בהצלחה למערכת👍");
          return Response.json();
      }
  })
      .then(data => data.json())
  }




















// function save() {
//     let user = {
//         id: JSON.parse(sessionStorage.getItem('currentUser'))._id,
//         email: document.getElementById("email3").value,
//         password: document.getElementById("password3").value,
//         firstName: document.getElementById("firstName3").value,
//         lastName: document.getElementById("lastName3").value

//     }
//     fetch("user/" + user.id, {
//         method: 'PUT',
//         headers: { "Content-Type": "application/json; charset=utf-8" },
//         body: JSON.stringify(user)
//     })
//         .then(response => {
//             if (response.ok) {
//                 alert("נשמרו העידכונים!");
//             }
//         })
// }
