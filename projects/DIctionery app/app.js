//will check this tommorrow

const word = document.querySelector('#input_');
const button = document.querySelector('#button_');
const result = document.querySelector('#result');

const getMeaning = async () => {
    const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;

    const response =await fetch( API);
    const data = await response.json();

    display_data(data);
}

const display_data = (data) => {

  const content = document.createElement('div');
  content.classList.add('content');

  // data[0].meanings.forEach((meanings, index) => {
  //   meanings.definitions.forEach((definition, defIndex) => {
  //     const meaningElement = document.createElement('div');
  //     meaningElement.innerHTML = `
  //                     <p>
  //                       Meaning ${index + 1} (${meanings.partOfSpeech}) <br>
  //                       ${defIndex + 1}. Definition: ${definition.definition} <br>
  //                     Example: ${definition.example}
  //                     </p>
  //                     `

  //     content.appendChild(meaningElement);
  //   });
  // });

  if(data && data.length > 0){
    const mainMeaning = data[0].meanings[0];
    const mainDefination = mainMeaning.definitions[0];

    const meaningElement = document.createElement('div');

    meaningElement.innerHTML = `
    <h3>Your Result</h3>
      <p>
      Definition: ${mainDefination.definition} <br>
      Example: ${mainDefination.example}
    </p>
    `;

    content.appendChild(meaningElement);

  } else{
    content.innerHTML = '<p>No results found.</p>';
  }
  
  result.appendChild(content);
}






button.addEventListener('click', () => {
    getMeaning();
})
