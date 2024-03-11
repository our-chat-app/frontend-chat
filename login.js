const loginButton = document.getElementById('login');
const loginForm = document.getElementById('login-form')
const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const error = document.getElementById('error');
const emailError = document.getElementById('emailError');

loginForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();
 
  const rawResponse = await fetch('http://192.168.132.120:3000/api/signIn', {
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

emailLogin.addEventListener('input', () => {
  if (emailLogin.value.length > 4) {
    emailError.style.display = 'none';
  } else {
    emailError.style.display = 'block';
  }
});
