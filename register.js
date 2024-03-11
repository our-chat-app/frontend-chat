const registerButton = document.getElementById('register');
const registerForm = document.getElementById('register-form')
const passwordRegister = document.getElementById('password-register');
const confirmPassword = document.getElementById('passwordconfirm-register');
const nicknameRegister = document.getElementById('nickname-register');
const emailRegister = document.getElementById('email-register');
const error = document.getElementById('error');

registerForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  console.log("hallå")
  if (passwordRegister.value === confirmPassword.value) {
    console.log("hej igen")
    const rawResponse = await fetch('http://192.168.132.120:3000/api/users', {
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
      window.location.replace('login.html');
    }
  } else {
    error.style.display = 'block';
  }
});
