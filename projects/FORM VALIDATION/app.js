const submit_btn = document.getElementById('sumbit');

const validate = (form) => {
    form.preventDefault();
    const username = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const password = document.getElementById('pass').value;

    if(username === ''){
        alert("username cannot be empty");
        username.focus();
        return false;
    }

    if(email === ''){
        alert("email cannot be empty");
        email.focus();
        return false;
    }

    if(password.length <= '8'){
        alert("length of password must be greated than eight characters");
        pass.focus();
        return false;
    }

    else{

        alert("Form submitted ")
        return true;
    }
}

submit_btn.addEventListener('click', validate);