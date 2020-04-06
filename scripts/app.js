//get the form users use to search for a city
const cityForm = document.querySelector('form');

// run the code block when a user submits the form
cityForm.addEventListener('submit', e => {
  //prevent page from refreshing on submit
  e.preventDefault();
  //get the city value that the user has submitted via the form
  //use trim() to remove any whitespace that may have been submitted
  const city = cityForm.city.value.trim();
  // clear the form field after it has been submitted
  cityForm.reset();
})