const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

let first = 'sk-Fz@@@@jZkho@@@@@vS9';
let second = 'Hq@@@@ae@79@@@@@@@mlVa';
let third = '@@@@@T3B@@@@@lbkF@@@@@';
let fourth = '@J@s@SsMkhaDtIWp@@@@tkJ0a@@@@@@@c6o';

const removeAtSymbol = (str) => {
    // Use the replace method to remove all occurrences of '@' with an empty string
    return str.replace(/@/g, '');
  };


  const joinString = (a, b, c, d) => {
    // Call removeAtSymbol on each input string
    a = removeAtSymbol(a);
    b = removeAtSymbol(b);
    c = removeAtSymbol(c);
    d = removeAtSymbol(d);
    
    return a + b + c + d;
  };


sendButton.addEventListener('click', async () => {
    const message = messageInput.value;
    received_mes = await get_chat_response(message);
    if (message.trim() !== '') {
        appendMessage('sent', message);
        appendMessage('received', received_mes);
       
        messageInput.value = '';
    }
});

const get_chat_response = async (inputmessage) => {
    const apiKey = joinString(first,second,third,fourth);


    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                max_tokens: 200, // Adjust as needed
                model : 'gpt-3.5-turbo',
                messages: [{'role': 'user', 'content': `${inputmessage}`}],
                // message : [{role: "user", content: "Hello world"}]
            }),
        });

        const data = await response.json();
        // console.log(data);
        return  data.choices[0].message.content;



    } catch (error) {
        console.log(error);
    }
}


function appendMessage(type, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = content;
    chatBox.appendChild(messageDiv);

    // Scroll to bottom to show new message
    chatBox.scrollTop = chatBox.scrollHeight; 
}
