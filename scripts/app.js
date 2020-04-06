//get the form users use to search for a city
const cityForm = document.querySelector('form');
//get the div with a class of card
const card = document.querySelector('.card');
//get the div with a class of details
const details = document.querySelector('.details');
//get the img with a class of time
const time = document.querySelector('img.time');
//get the div with a class of icon
const icon = document.querySelector('.icon img');

//function to update the ui with the data returned from the cityForm function
const updateUI = (data) => {

  // //store the data in local variables to reduce verbiage
  // const cityDets = data.cityDets;
  // const weather = data.weather;

  //destructure properties - shorthand of the above comment
  const { cityDets, weather } = data;

  //update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  //update the weather condition icon image dynamically using the value returned by the WeatherIcon property
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  //update the night/day icon images
  // let timeSrc = null;
  // if(weather.IsDayTime) {
  //   timeSrc = 'img/day.svg';
  // } else {
  //   timeSrc = 'img/night.svg';
  // }

  //use the ternary operator instead of the above conditional statement
  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

  time.setAttribute('src', timeSrc);

  // remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }

};

//this async function takes in the data returned by the getCity and getWeather async functions in forecast.js
const updateCity = async (city) => {
  //get the value to be returned and store it in the cityDets variable
  const cityDets = await getCity(city);
  //get the value to be returned and store it in the weather variable, get the Key of the inputted city stored in cityDets
  const weather = await getWeather(cityDets.Key);
  // return the values using object shorthand notation
  return { cityDets, weather };

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
  // then pass the data returned to the upDateUI function, which will output it  to the browser
  .then(data => updateUI(data))
  .catch(err => console.log(err));

  // set local storage
  localStorage.setItem('city', city);

});

if(localStorage.getItem('city')){
  updateCity(localStorage.getItem('city'))
  .then(data => updateUI(data))
  .catch(err => console.log(err));
}