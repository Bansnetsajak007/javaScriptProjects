//random color generator app

const main_box = document.querySelector('.box');
const color_code = document.getElementById('color_code');
generate_button = document.getElementById('generate');

const generateColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;  
}

generate_button.addEventListener('click', () => {

    generate_button.style.backgroundColor = color_code.value = main_box.style
    .backgroundColor = generateColor();
})


