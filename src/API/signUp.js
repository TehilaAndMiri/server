export async function signUpUser(user) {
    return fetch('http://localhost:2623/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(data => data.json())
  }
