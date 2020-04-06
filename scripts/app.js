//get the form users use to search for a city
const cityForm = document.querySelector('form');
//this async function takes in the data returned by the getCity and getWeather async functions in forecast.js
const updateCity = async (city) => {
  //get the value to be returned and store it in the cityDets variable
  const cityDets = await getCity(city);
  //get the value to be returned and store it in the weather variable, get the Key of the inputted city stored in cityDets
  const weather = await getWeather(cityDets.Key);
  // return the values
  return {
    cityDets: cityDets,
    weather: weather
  };

}

// run the code block when a user submits the form
cityForm.addEventListener('submit', e => {
  //prevent page from refreshing on submit
  e.preventDefault();
  //get the city value that the user has submitted via the form
  //use trim() to remove any whitespace that may have been submitted
  const city = cityForm.city.value.trim();
  // clear the form field after it has been submitted
  cityForm.reset();
  //update ui with the city inputted by the user
  updateCity(city)
  .then(data => console.log(data))
  .catch(err => console.log(err));
});