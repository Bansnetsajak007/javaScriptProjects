const gallery_images = document.querySelectorAll('.images img');

console.log(gallery_images)


gallery_images.forEach(image => {
    image.addEventListener('click', ()=> {
        console.log('clicked')
        const imageUrl = image.src;
        image.title = 'image';
        window.open(imageUrl,'_self');
    })
})