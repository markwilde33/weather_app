//get theAPI key needed for the app
const key = 'TbzciWL68XHGkmJfJ1bmICvLzpekjAwa'
//create an async function to get the data
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
//get the data returned by the promise
getCity('leeds')
.then(data => console.log(data))
.catch(err => console.log(err));