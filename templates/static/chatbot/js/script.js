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

            fetch(`http://127.0.0.1:8050/chatbot/${encodeURIComponent(messageText)}`)
                .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro na solicitação: ${response.status}`);
                }
                return response.json();
                })
                .then((data) => {
                console.log(data.message); // Isso imprimirá a resposta do chatbot no console
                })
                .catch((error) => {
                console.error(`Erro: ${error}`);
                });

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