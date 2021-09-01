//url for api
const foodDiv = document.querySelector(`#food-data`);

const input = document.querySelector("input");
const textInputBox = document.querySelector("#food");
const button = document.querySelector('#button');

async function fetchData(food) {
  let url = `https://api.edamam.com/api/nutrition-data?app_id=327e7fb3&app_key=29781e8ea7a4666fe38782b16f434a63&nutrition-type=cooking&ingr=${food}?fulltext=true`
  try {
    let response = await axios.get(url);
    processLabel(response);
    processFacts(response);
    console.log(response.data);
    
    // showFoodData(data);
    
    
    
    
    // (res.data[0]);
  } catch (error) {
    console.log(error);
  }
}
function processLabel(response) {
  let ul = document.getElementById('health-items');
  response.data.healthLabels.forEach((healthLabel) => {
    let li = document.createElement('li');
    ul.appendChild(li).innerHTML = `${healthLabel}`;
  
  })
}
function processFacts(response) {
  let ul = document.getElementById('nutrition');
  
    let li = document.createElement('li');
  ul.appendChild(li).innerHTML = `${response.data.totalNutrients['FAT', 'CHOCDF', 'FATRN'].label} ${response.data.totalNutrients['FAT', 'CHOCDF', 'FATRN'].quantity}`;
  // ul.appendChild(li).innerHTML= `${response.data.totalNutrients['FACHOCDFT'].label} ${response.data.totalNutrients['CHOCDF'].quantity}`;

  
}
// fetchData('1 cup bacon');
function handleSubmit() {
  console.log('handleSubmit');
  // event.preventDefault();
  const textInput = input.value;
  console.log(textInput);
  fetchData(textInput);
  
  input.value = "";
}
// button.addEventListener('button', handleSubmit);


// https://us05web.zoom.us/j/89588720456?pwd=V2dqajNjdFN2QzZ4WjNoSTRiMXJrdz09 
