const celsius = document.getElementById('cel');
const fahrenheit = document.getElementById('fah');
const kelvin = document.getElementById('kel');


const cel_others = () => {
    if(celsius.value){
        let c = celsius.value;
        let f = (c * 9/5) + 32;
        let k = +c + 273.15;
    
        //logic that gets fired if f and k are not integers
        if(!Number.isInteger(f)) {
            f = f.toFixed(4);
        }
        if(!Number.isInteger(k)) {
            k = k.toFixed(4);
        }
        fahrenheit.value = f;
        kelvin.value = k;
    } else{
        fahrenheit.value = "";
        kelvin.value = "";
    }

}

const fah_others = () => {
    if(fahrenheit.value){
        let f = fahrenheit.value;
        let c = (f - 32) * 5/9;
        let k = c + 273.15;

        if(!Number.isInteger(c)) {
            c = c.toFixed(4);
        }
        if(!Number.isInteger(k)) {
            k = k.toFixed(4);
        }
        celsius.value = c;
        kelvin.value = k;
    } else{
        celsius.value = "";
        kelvin.value = "";
    }

}
const kel_others = () => {
    if(kelvin.value){
        let k = kelvin.value;
        let c = k - 273.15;
        let f = (k - 273.15) * 9/5 + 32;

        if(!Number.isInteger(c)) {
            c = c.toFixed(4);
        }
        if(!Number.isInteger(f)) {
            f = f.toFixed(4);
        }
        celsius.value = c;
        fahrenheit.value = f;
        } else {
            celsius.value = "";
            fahrenheit.value = "";
        }
}

celsius.addEventListener('input', cel_others);
fahrenheit.addEventListener('input', fah_others);
kelvin.addEventListener('input', kel_others);