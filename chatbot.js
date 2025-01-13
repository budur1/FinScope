function sendMessage(message) {
    // Display user message
    displayMessage(message, 'user');
    // Simulate bot response with a slight delay
    setTimeout(function() {
        displayMessage('رد آلي على: ' + message, 'bot');
    }, 1000);
}

function sendUserMessage() {
    const userMessage = document.getElementById('user-input').value;
    if (userMessage) {
        // Display user message
        displayMessage(userMessage, 'user');
        // Simulate bot response with a slight delay
        setTimeout(function() {
            displayMessage('رد آلي على: ' + userMessage, 'bot');
        }, 1000);
    }
    document.getElementById('user-input').value = '';
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.innerHTML = `<div class="message">${message}</div>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
