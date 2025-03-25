const socket = io();
const username = prompt('Enter your username:');

const messages = document.getElementById('messages');
const input = document.getElementById('message-input');
const button = document.getElementById('send-button');

button.addEventListener('click', () => {
    const message = input.value;
    if (message) {
        socket.emit('chat message', `${username}: ${message}`); // Update this line
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('div');
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});
