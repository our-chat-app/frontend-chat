const submitButton = document.getElementById("message-submit-button");
const messageInputField = document.getElementById("message-input");

submitButton.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const rawResponse = await fetch('http://localhost:3000/api/message',{
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      messages: messageInputField.value,
      //userId: .value,
    }),
  });
  if (rawResponse.status == 201) {
    const content = await rawResponse.json();
    /* window.location.replace('index.html'); */
  }
}
);
