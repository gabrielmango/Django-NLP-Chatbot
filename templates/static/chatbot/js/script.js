document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const messageBox = document.getElementById("message-box");

    sendButton.addEventListener("click", function () {
        const messageText = messageInput.value.trim();

        if (messageText !== "") {
            const newMessage = document.createElement("p");
            newMessage.innerHTML = `<strong>Você:</strong> ${messageText}`;
            messageBox.appendChild(newMessage);

            // Limpar a caixa de entrada
            messageInput.value = "";

            // Rolagem automática para a mensagem mais recente
            messageBox.scrollTop = messageBox.scrollHeight;
        }
    });

    // Permite pressionar Enter para enviar uma mensagem
    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendButton.click();
            event.preventDefault();
        }
    });
});