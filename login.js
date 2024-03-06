const loginButton = document.getElementById('login');
const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const error = document.getElementById('error');

loginButton.addEventListener('click', async (ev) => {
  ev.preventDefault();
  const rawResponse = await fetch('http://localhost:3000/api/signIn', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      email: emailLogin.value,
      password: passwordLogin.value,
    }),
  });
  if (rawResponse.status == 200) {
    const content = await rawResponse.json();
    window.location.replace('index.html');
    
  } else {
    error.style.display = 'block';
  }
});


