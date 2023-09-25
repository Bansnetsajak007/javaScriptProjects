function bmi_calculate(){

    const weight_ = parseFloat(document.getElementById("Weight").value);
    const height_ = parseFloat(document.getElementById("Height").value);

    const bmi = (weight_/(height_ * height_)).toFixed(2);

    console.log(bmi);

    display_bmi(bmi);

}


function display_bmi(bmi){
    
    const result_container = document.getElementById("result");

    //if any element is found then remove 
    while(result_container.firstChild){
        result_container.firstChild.remove();
    }

    const p = document.createElement("p");
    
    if(bmi <= 18.4){
        p.textContent = `UnderWeight ${bmi}`;
    }

    else if(bmi >= 18.5 && bmi <= 24.5){
        p.textContent = `Normal ${bmi}`;
    }

    else if(bmi >= 25.0 && bmi <= 39.9){
        p.textContent = `Underweight ${bmi}`;
    }

    else{
        p.textContent = `Obese ${bmi}`;
    }

    result_container.appendChild(p);

}