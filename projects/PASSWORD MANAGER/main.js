
const add_button = document.getElementById('btn1');
const view_button = document.getElementById('btn2');
const delete_button = document.getElementById('btn3');
let password_of = [];
let password = [];

function load_password(){
   const stored_password_of = JSON.parse(localStorage.getItem("password_of"));
   const stored_password = JSON.parse(localStorage.getItem("password"));

   if(stored_password && stored_password_of && stored_password_of.length === stored_password.length){
    password_of = stored_password_of;
    password = stored_password;
   }
}


function save_password(){

    const pass_of = document.getElementById('pass_of').value;
    const pass = document.getElementById('pass').value;

    //simply checks weather value of pass_of is there or not in password_of array
    //if not then pass_of will be pushed
    if(! password_of.includes(pass_of)){
        password_of.push(pass_of);
    }

    //if not then pass_of will be pushed
    if(! password.includes(pass)){
        password.push(pass);
    }

        localStorage.setItem("password_of", JSON.stringify(password_of));
        localStorage.setItem("password", JSON.stringify(password));
        alert("Password store successfully")
    
}

function view_record(){
    const pass_of = document.getElementById('pass_of').value;

    const stored_password_of = JSON.parse(localStorage.getItem("password_of"));
    const stored_password = JSON.parse(localStorage.getItem("password"));
    
    if (stored_password_of && stored_password_of.length && stored_password_of.length > 0 &&
        stored_password && stored_password.length && stored_password.length > 0) {
        
        const index = stored_password_of.indexOf(pass_of);
    
        if (index !== -1) {
            const password = stored_password[index];
            alert("Password: " + password);
        } else {
            alert("Password not found."); //will execute if there no element in an array
        }
    }

     else {
        alert("No stored passwords found."); //will execute if ther no array
    }
    
    
}




function delete_record(){
    const pass_of = document.getElementById('pass_of').value;
     
    const index = password_of.indexOf(pass_of);

    if(index !== -1){
        //code to delete specific password form array
        password_of.splice(index,1);
        password.splice(index,1);
            
        //updating original array
        localStorage.setItem("password_of", JSON.stringify(password_of));
        localStorage.setItem("password", JSON.stringify(password));

        document.getElementById('pass_of').value = "";
        document.getElementById('pass').value = "";


        alert("Password successfully deleted");

    }

    else{
        alert("password not found");
    }




}

load_password();

add_button.addEventListener('click', save_password);
view_button.addEventListener('click', view_record);
delete_button.addEventListener('click', delete_record);

