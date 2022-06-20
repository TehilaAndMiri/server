export async function signUpUser(user) {
    return fetch('http://localhost:2626/member/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(Response => {
      if (Response.ok && Response.status === 200) {
          alert("המדריכה נכנסה בהצלחה למערכת👍");
          return Response.json();
      }
  })
      .then(data => data.json())
  }
