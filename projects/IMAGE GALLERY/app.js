
const gallery = document.querySelectorAll('.image_container');  //return domcollection
const array = Array.from(gallery)  //converting domcollection into array
console.log(array);

// Function to handle image click
function handleImageClick(event) {
  console.log(event)
  if(event && event.target){
    const clickedImage = event.target;
    
    const confirmed = confirm("Display the image in same tab?");

    if(confirmed){
      window.location.href = clickedImage.src;
    }

    
    // Open a new window
    else{
  
    const newWindow = window.open("", "_blank");
  
    // Create a new image element in the new window
   
    newWindow.document.title = "Image";
    const displayImage = newWindow.document.createElement("img");
    displayImage.src = clickedImage.src;
  
    // Append the image to the new window's document body
    newWindow.document.body.appendChild(displayImage);
  
    }
  }
}
  

  gallery.forEach((element) => element.addEventListener('click', handleImageClick));

  









