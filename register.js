const registerButton = document.getElementById('register');
const passwordRegister = document.getElementById('password-register');
const confirmPassword = document.getElementById('passwordconfirm-register');
const nicknameRegister = document.getElementById('nickname-register');
const emailRegister = document.getElementById('email-register');
const error = document.getElementById('error');

registerButton.addEventListener('click', async (ev) => {
  ev.preventDefault();
  if (passwordRegister.value === confirmPassword.value) {
    const rawResponse = await fetch('http://localhost:3000/api/users', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        email: emailRegister.value,
        password: passwordRegister.value,
        nickname: nicknameRegister.value,
      }),
    });
    if (rawResponse.status == 201) {
      const content = await rawResponse.json();
      /* window.location.replace('index.html'); */
    }
  } else {
    error.style.display = 'block';
  }
});
