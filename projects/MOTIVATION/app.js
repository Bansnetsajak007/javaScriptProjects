button = document.getElementById('btn');
resutl = document.querySelector('.result');

const show_message = () => {
    resutl.innerHTML = `

    <p>Are you serious bro?? Wanna destory yourself??? </p>
    <p>Think about your carrear! </p>
    <p>Don't you wanna be a programmer? </p>
    <p>Don't you wanna make your parents proud of you? </p>
    <p>Don't you wanna live a luxorious life? </p>
    <p>After all this if you still watch then sorry mate you are destroyed!!! </p>

    `


}

button.addEventListener('click', () => {
    show_message();
})

