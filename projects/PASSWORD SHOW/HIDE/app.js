//implementation of password show/hide functionality

let button = document.getElementById('s_btn');
let password = document.getElementById('pass');

const btn_clicked = () => {
    if(button.innerText === "show"){
        
        password.type = 'Text';
        button.innerText = "Hide"

    }

    else{
        password.type = 'password';
        button.innerText = "show"
    }
}


button.addEventListener('click' , btn_clicked)


