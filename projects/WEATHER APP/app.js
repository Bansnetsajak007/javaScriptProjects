//restructuring the code 

let button = document.getElementById('btn');
let result_container = document.querySelector('.result_container');



const getweather = async () => {
    // console.log(city.value);
    try {
    const api_key = 'f311e58e33f22339096987b25d06b11d';
    const city = document.getElementById('input').value;
    console.log(city);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`);


    const weather_data = await response.json();

    showweather(weather_data);

    } catch (error) {
        console.log(error.message)
    }
}

const showweather = (data) => {
    console.log(data);
    if(data.message === 'city not found'){

        result_container.innerHTML = '<h3>OOPS city not found!!!</h3>';
    }

    else{
        result_container.innerHTML = `
        <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} ℃</h2>
        <h4> ${data.weather[0].main} </h4>
        <h4> ${data.wind.speed} km/hr</h4>
    </div>
        
        `
    }
}




button.addEventListener('click', getweather);