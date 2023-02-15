const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'd4515e3fab03f81b376b0e441c2efe9c';
let zip = 40515;
let zipcode = zip+",us";
let state = {
    city: null,
   
};
    
let options = {
        baseURL: BASE_URL,
        params: {
            zip: zipcode,                                            
            appid: API_KEY,
        }                                    
};

axios.get('/weather', options)
  .then(function (response) {
    console.log(response);
    state.city = response.data
    console.log("success");

  })
  .catch(function (error) {
    console.log(error);
    console.log("it failed");
  })
  .then(function () {
    // always executed
    console.log(state)
  });
