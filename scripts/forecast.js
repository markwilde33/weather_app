//get the API key needed for the app
const key = 'TbzciWL68XHGkmJfJ1bmICvLzpekjAwa'
//create an async function to get the city data, take in the current city Key as an argument for the id parameter
const getWeather = async (id) => {
  //base url of the api endpoint the request is being made to
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
  // query the api key by the id entered as an argument
  const query = `${id}?apikey=${key}`;
  //combine requests so that they are resolved together
  const response = await fetch(base + query);
  //get the data
  const data = await response.json();
  //return the data
  return data[0];
};

//create an async function to get the city data
const getCity = async (city) => {
//base url of the api endpoint the request is being made to
const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
// query the api key by the city entered as an argument
const query = `?apikey=${key}&q=${city}`;
//combine requests so that they are resolved together
const response = await fetch(base + query);
//get the data
const data = await response.json();
//return the data, 1st result only
return data[0];
};
