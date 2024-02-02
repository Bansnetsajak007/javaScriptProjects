const generate_btn = document.getElementById('generate');
const displaymeme = document.getElementById('display');


const update_meme = (meme_url) => {
        displaymeme.setAttribute("src", meme_url);;
}



const get_meme = async () => {
    try {
        const response = await fetch("https://busy-gray-octopus-tux.cyclic.app/memes");
        const data = await response.json();
        update_meme(data.imageUrl);

    } catch (error) {
        console.log("Error fetching the data!!");
    }

}

generate_btn.addEventListener('click', ()=> {
    get_meme();
})
