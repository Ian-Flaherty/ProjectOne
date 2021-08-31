//url for api
const foodDiv = document.querySelector(`#food-data`);

const input = document.querySelector("input");
const textInputBox = document.querySelector("#food");
const button = document.querySelector('#button');

async function fetchData(food) {
  let url = `https://api.edamam.com/api/nutrition-data?app_id=327e7fb3&app_key=29781e8ea7a4666fe38782b16f434a63&nutrition-type=cooking&ingr=${food}?fulltext=true`
  try {
    let response = await axios.get(url);
    console.log(response.data);
    
    // showFoodData(data);
  

    

    // (res.data[0]);
  } catch (error) {
    console.log(error);
  }
}

fetchData('1 cup bacon');
// function handleSubmit(event) {
//   event.preventDefault();
//   const textInput = input.value;
//   console.log(textInput);
//   fetchData(textInput);
//   input.value = "";
// }
// button.addEventListener('button', handleSubmit);


  
