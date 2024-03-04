// import './style.scss'
const messageSender = document.getElementById('message-sender');
let textBox = document.getElementById('chat-messages');
async function getUsers() {
  const rawResponse = await fetch('http://localhost:3000/api/users');
  const allUsers = await rawResponse.json();

  allUsers.forEach((user) => {
    const senderLink = document.createElement('a');
 
    
  });

  
}

export async function getMessages() {
  textBox.innerHTML = '';
  const rawResponse = await fetch('http://localhost:3000/api/messages');
  const allMessages = await rawResponse.json();
  //Kanske inte behöver hämta alla meddelanden?
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
      

      messageSender.classList.add('message-sender');
      messageHolder.className = 'message-box-holder';
      messageBox.classList.add('message-box', 'message-partner');

      messageBox.innerHTML = message.message;
      messageHolder.appendChild(messageSender);
      messageHolder.appendChild(messageBox);
      messageSender.appendChild(senderLink);
      textBox.appendChild(messageHolder);
    }
  });
}

await getMessages();
