document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let question = document.getElementById('question').value;
    let chatContainer = document.getElementById('chat-container');

    chatContainer.insertAdjacentHTML('beforeend', '<div class="message user-message">' + question + '</div>');

    let chatMessages = chatContainer.querySelectorAll('.message');
    chatMessages.forEach(message => {
        message.innerHTML = message.innerHTML.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/g, '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });

    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'question=' + encodeURIComponent(question),
    })
    .then(response => response.json())
    .then(data => {
        chatContainer.insertAdjacentHTML('beforeend', '<div class="message typing-animation"></div>');

        chatContainer.scrollTop = chatContainer.scrollHeight;

        setTimeout(() => {
            let typingMessage = chatContainer.querySelector('.typing-animation');
            typingMessage.remove();
            chatContainer.insertAdjacentHTML('beforeend', '<div class="message chatbot-message">' + data.response + '</div>');
            
            let chatMessages = chatContainer.querySelectorAll('.message');
            chatMessages.forEach(message => {
                message.innerHTML = message.innerHTML.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/g, '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            });

            chatMessages.forEach(message => {
                message.innerHTML = message.innerHTML.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/g, '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            });

            chatMessages.forEach(message => {
                message.innerHTML = message.innerHTML.replace(/(?:https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|mp4|webm|ogg|mp3|wav|flac|aac|avi|mkv|mov|wmv|mpg|flv|3gp))/g, '<img src="$&" alt="image" class="chat-image">');
            });

            chatMessages.forEach(message => {
                message.innerHTML = message.innerHTML.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                message.innerHTML = message.innerHTML.replace(/\*(.*?)\*/g, '<em>$1</em>');
                message.innerHTML = message.innerHTML.replace(/```(.*?)```/g, '<code>$1</code>');
                message.innerHTML = message.innerHTML.replace(/`([^`]+)`/g, '<code>$1</code>');
                message.innerHTML = message.innerHTML.replace(/~~(.*?)~~/g, '<del>$1</del>');
                message.innerHTML = message.innerHTML.replace(/__(.*?)__/g, '<u>$1</u>');
                message.innerHTML = message.innerHTML.replace(/__(.*?)__/g, '<u>$1</u>');
                message.innerHTML = message.innerHTML.replace(/__(.*?)__/g, '<u>$1</u>');
                message.innerHTML = message.innerHTML.replace(/__(.*?)__/g, '<u>$1</u>');
                message.innerHTML = message.innerHTML.replace(/__(.*?)__/g, '<u>$1</u>');
                message.innerHTML = message.innerHTML.replace(/__(.*?)__/g, '<u>$1</u>');
            });

            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 1000);
    });

    document.getElementById('question').value = '';
});
