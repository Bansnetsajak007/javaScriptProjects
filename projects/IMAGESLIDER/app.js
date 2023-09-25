
const images =  ["images/1.jpg","images/2.jpg","images/3.jpg"]
let current_index = 0;

function next(){
    const currentImage = document.getElementById("slider_images");  //getting image and storing 
    current_index +=1;

    if (current_index === images.length){
        current_index =0;
    }

    currentImage.src = images[current_index];  //using particular image as source in image tag simly changing src attribute

}

function prev() {
  const sliderImage = document.getElementById("slider_images");
  current_index -= 1;
  
  if (current_index < 0) {
    current_index = images.length - 1;
  }

  sliderImage.src = images[current_index];
}