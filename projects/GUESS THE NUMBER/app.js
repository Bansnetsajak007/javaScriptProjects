
const guess_button = document.getElementById('guess');
const score = document.getElementById('score');
let score_value = 100;

function random_number(){
    return Math.floor(Math.random() * 100) + 1;
}

let random_ = random_number();


function game_win(){
    console.log(random_);
    const number = parseInt(document.getElementById('num').value);

    const result_container = document.getElementById('result');

    while(result_container.firstChild){
        result_container.firstChild.remove();
    }

    const p = document.createElement("p");


        
    if (random_ > number) {
        p.textContent = `${number} is too low`;
        score_value -=1;
        score.textContent = score_value+1;
    } else if (random_ < number) {
        p.textContent = `${number} is too high`;
        score_value -=1;
        score.textContent = score_value+1;
    } else {
        p.textContent = "Congratulations! You guessed the correct number";
    }


    result_container.appendChild(p);

}

guess_button.addEventListener('click', game_win);




