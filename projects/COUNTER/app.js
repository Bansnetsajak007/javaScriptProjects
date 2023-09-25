// let time = document.getElementById("clock");

// let hour = '00';
// let min = '00';
// const count_timer = () => {
//     let date = new Date();
//     let sec = date.getSeconds();

//     sec = (sec < 10) ? "0" + sec : sec;
//     // min = (min < 10) ? "0" + min : min;
    
//     if (sec === 59) {
//         min = parseInt(min, 10) + 1;
//         min = (min < 10) ? "0" + min : min;
        
//     }
    
//     if(min === 59){
//         hour = parseInt(hour,10) + 1;
//         hour = (hour < 10) ? "0" + hour : hour;
//         min = '00';
//     }

//     let counter =  hour + ":" + min + ":" + sec

//       time.innerText = counter;
//       setTimeout(function(){ count_timer() }, 1000);
// }

// count_timer();

// window.addEventListener("beforeunload", function(event) {
//     event.preventDefault();
//     event.returnValue = '';
// });



//got to understand this code 
let time = document.getElementById("clock");
let day_ = document.getElementById("day");

let hour = localStorage.getItem("hour") || '00';
let min = localStorage.getItem("min") || '00';
let sec = localStorage.getItem("sec") || '00';
let day = localStorage.getItem("day") ||  '00';


//taking buttons and storing in variales
let reset_btn = document.getElementById('reset'); 
let start_btn = document.getElementById('start'); 

const reset_timer = () => {

    const confirm_ = confirm("Are you Sure You want to reset? ")

    if(confirm_){
    hour = '00';
    min = '00';
    sec = '00';
    day = '00';

    //resetting timers variables
    localStorage.setItem("hour", hour);
    localStorage.setItem("min", min);
    localStorage.setItem("sec", sec);
    localStorage.setItem("day", day);

    }

    else{
    return true;
    }

}

const start_timer = () => {

    count_timer();
}




const count_timer = () => {
    sec = (parseInt(sec, 10) + 1).toString().padStart(2, '0');

    if (sec === '60') {
        sec = '00';
        min = (parseInt(min, 10) + 1).toString().padStart(2, '0');

        if (min === '60') {
            min = '00';
            hour = (parseInt(hour, 10) + 1).toString().padStart(2, '0');

            if (hour === '24') {
                day = (parseInt(day, 10) + 1).toString().padStart(2, '0');
            }
        }
    }

    localStorage.setItem("hour", hour);
    localStorage.setItem("min", min);
    localStorage.setItem("sec", sec);
    localStorage.setItem("day", day);

    let counter = hour + ":" + min + ":" + sec;

    day_.innerText = day + ' day';
    time.innerText = counter;
    setTimeout(function() { count_timer() }, 1000);
}


reset_btn.addEventListener('click', reset_timer)
start_btn.addEventListener('click', start_timer,{once : true})

