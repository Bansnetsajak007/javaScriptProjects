const generate_btn = document.getElementById('generate');
const displaymeme = document.getElementById('display');


const update_meme = (meme_url) => {
        displaymeme.setAttribute("src", meme_url);;
}



const get_meme = async () => {
    try {
        const response = await fetch("https://meme-api.com/gimme/wholesomememes");
        const data = await response.json();
        update_meme(data.url);

    } catch (error) {
        console.log("Error fetching the data!!");
    }

    //will execute anyhow
    finally{
        console.log("promise resolved!!")
    }
}

generate_btn.addEventListener('click', ()=> {
    get_meme();
})
