// import './style.scss'
//const messageSender = document.getElementById('message-sender');

let textBox = document.getElementById('chat-messages');
async function getUsers() {
  const rawResponse = await fetch('http://192.168.132.120:3000/api/users');
  const allUsers = await rawResponse.json();

}

export async function getMessages() {
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(),
    credentials: "include",
  };
  textBox.innerHTML = '';
  const rawResponse = await fetch('http://192.168.132.120:3000/api/messages', options);
  const allMessages = await rawResponse.json();

  if (rawResponse.status == 401) {
    window.location.replace('login.html');
  }

  allMessages.forEach((message) => {
    
    if (message.isCurrentUser) {
      const messageHolder = document.createElement('div');
      const messageBox = document.createElement('div');
      messageHolder.className = 'message-box-holder';
      messageBox.className = 'message-box';
      messageBox.innerHTML = message.message;
      messageHolder.appendChild(messageBox);
      textBox.appendChild(messageHolder);
    } else {
      const messageHolder = document.createElement('div');
      const messageBox = document.createElement('div');
      const messageSender = document.createElement('div');
      const senderLink = document.createElement('a');

      messageSender.classList.add('message-sender');
      messageHolder.className = 'message-box-holder';
      messageBox.classList.add('message-box', 'message-partner');

      messageBox.innerHTML = message.message;
      senderLink.innerHTML = message.nickname;
      messageHolder.appendChild(messageSender);
      messageHolder.appendChild(messageBox);
      messageSender.appendChild(senderLink);
      textBox.appendChild(messageHolder);
    }
    
  });
}



await getMessages();

  textBox.scrollTo({ top:9999,left:0,behavior:'instant' })




