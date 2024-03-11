import { getMessages } from './main.js';
const messageForm = document.getElementById('message-form')
const submitButton = document.getElementById('message-submit-button');
const messageInputField = document.getElementById('message-input');
const messageSender = document.getElementById('message-sender');
let textBox = document.getElementById('chat-messages');



messageForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();

  const rawResponse = await fetch('http://192.168.132.120:3000/api/message', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      message: messageInputField.value,
      // userId:user.id
    }),
  });
  if (rawResponse.status == 201) {
    const content = await rawResponse.json();
    // window.location.replace('login.html');
  }
  await getMessages();
  document.getElementById('message-input')
  messageInputField.value = ''
  textBox.scrollTo({ top:9999,left:0,behavior:'instant' 
})
});

