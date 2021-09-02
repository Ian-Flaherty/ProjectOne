
const foodDiv = document.querySelector(`#food-data`);
const input = document.querySelector("input");
const textInputBox = document.querySelector("#food");
const button = document.querySelector('#button');

async function fetchData(food) {
  let url = `https://api.edamam.com/api/nutrition-data?app_id=327e7fb3&app_key=29781e8ea7a4666fe38782b16f434a63&nutrition-type=cooking&ingr=${food}?fulltext=true`
  try {
    let response = await axios.get(url);
    processDietary(response);
    processCarbs(response);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

function processDietary(response) {
  
  let ul = document.getElementById('health-items');
  ul.innerHTML = "";
  response.data.healthLabels.forEach((healthLabel) => {
    let li = document.createElement('li');
    
    ul.appendChild(li).innerHTML = `${healthLabel}`;

  })
}
function processCarbs(response) {
  let ul = document.getElementById('nutrition');
  
    let li = document.createElement('li');
  ul.appendChild(li).innerHTML = `${response.data.totalNutrients['CHOCDF'].label} ${response.data.totalNutrients['CHOCDF'].quantity}`;

}

function handleSubmit() {
  console.log('handleSubmit');
  
  const textInput = input.value;
  console.log(textInput);
  fetchData(textInput);
  
  input.value = "";
}

