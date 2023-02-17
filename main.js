const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'd4515e3fab03f81b376b0e441c2efe9c';

let state = {
      city: null,

};

function getData() {
  let zip = selector("zipBox").value;
  let zipcode = zip +",us";
  let options = {
    baseURL: BASE_URL,
    params: {
         zip: zipcode,                                            
         appid: API_KEY,
     }                                    
  }
 
  axios.get('/weather', options)
    .then(function (response) {

      selector("dataContainer").innerHTML = "";
      console.log(response);
      state.city = response.data;
      console.log("success");
      weather()
      
  
    })
    .catch(function (error) {
      console.log(error);
      console.log("it failed");
      alert("area code invalid")

    })
    .then(function () {
      // always executed
      
    });
};

const main = document.querySelector(".main");

function selector(ElementId){
return document.getElementById(ElementId)
 }

function make(IdName, Location, elementType, className, content)  {     
     const location = document.getElementById(Location);
     const newElement = document.createElement(elementType);
     newElement.setAttribute('id',IdName)
     newElement.setAttribute('class',className)

     if (content != null || content != ""){
        newElement.innerHTML = content;
     }

     location.appendChild(newElement)
}
 
function init() {

    // first div with inputs(button and zip text box)
  make(/*Id:*/"inputsContainer",/*Parent Id:*/"main",/*Type:*/"div",/*class:*/"container p-5 text-center",/*Txt:*/"");
    make(/*Id:*/"weatherTitle",/*Parent Id:*/"inputsContainer",/*Type:*/"div",/*class:*/"container p-3 m-4 text-center display-1",/*Txt:*/"Weather App");
    make(/*Id:*/"button",/*Parent Id:*/"inputsContainer",/*Type:*/"button",/*class:*/"btn btn-outline-primary",/*Inner Txt:*/"Get Weather");
        selector("button").addEventListener('click', getData); 
    make(/*Id:*/"zipBox",/*Parent Id:*/"inputsContainer",/*Type:*/"input",/*class:*/"button",/*Inner Txt:*/"");

  make(/*Id:*/"dataContainer",/*Parent Id:*/"main",/*Type:*/"div",/*class:*/"container text-white",/*Inner Txt:*/"");
 }

//make function 
function weather() {
  const tempK = state.city.main.temp;
  const tempC = tempK - 273.15;
  const tempF = tempC*(9/5)+32;

    make(/*Id:*/"cityCont",/*Parent Id:*/"dataContainer",/*Type:*/"div",/*class:*/"container m-3",/*Inner Txt:*/"")
      make(/*Id:*/"cityRow1", /*Parent Id:*/"cityCont",/*Type:*/ "div",/*class:*/"row text-center", "")
        make(/*Id:*/"cityName", /*Parent Id:*/"cityRow1", /*Type:*/"div",/*class:*/"col-12  p-4 bg-info","City:")
        make(/*Id:*/"cityNameContent",/*Parent Id:*/"cityRow1",/*Type:*/"div",/*class:*/"col-12 p-4 bg-dark",/*Inner Txt:*/state.city.name)

    make(/*Id:*/"tempCont",/*Parent Id:*/"dataContainer",/*Type:*/"div",/*class:*/"container text-center m-3",/*Inner Txt:*/"");
      make(/*Id:*/"tempHeader",/*Parent Id:*/"tempCont",/*Type:*/"div",/*class:*/"row text-center bg-info",/*Inner Txt:*/"");
        make(/*Id:*/"tempText",/*Parent Id:*/"tempHeader",/*Type:*/"div",/*class:*/"col-12 p-4",/*Inner Txt:*/"Temperature");
     
      make(/*Id:*/"tempRow",/*Parent Id:*/"tempCont",/*Type:*/"div",/*class:*/"row p-5 bg-dark",/*Inner Txt:*/"");
        make(/*Id:*/"tempKValue",/*Parent Id:*/"tempRow",/*Type:*/"div",/*class:*/"col-4",/*Inner Txt:*/Math.round(tempK)+" K");
        make(/*Id:*/"tempFValue",/*Parent Id:*/"tempRow",/*Type:*/"div",/*class:*/"col-4",/*Inner Txt:*/Math.round(tempF)+" F");
        make(/*Id:*/"tempCValue",/*Parent Id:*/"tempRow",/*Type:*/"div",/*class:*/"col-4",/*Inner Txt:*/Math.round(tempC)+" C");
      
    make(/*Id:*/"conditionContainer",/*Parent Id:*/"dataContainer",/*Type:*/"div",/*class:*/"container  text-center m-3",/*Inner Txt:*/"");
      make(/*Id:*/"conditionTitle",/*Parent Id:*/"conditionContainer",/*Type:*/"div",/*class:*/"row p-5 bg-info",/*Inner Txt:*/"");
        make(/*Id:*/"conditionTitleText",/*Parent Id:*/"conditionTitle",/*Type:*/"div",/*class:*/"col-12 ",/*Inner Txt:*/"Condition Outide:");
      make(/*Id:*/"conditionContent",/*Parent Id:*/"conditionContainer",/*Type:*/"div",/*class:*/"row p-5 bg-dark",/*Inner Txt:*/"");
        make(/*Id:*/"conditionText",/*Parent Id:*/"conditionContent",/*Type:*/"div",/*class:*/"col-12",/*Inner Txt:*/state.city.weather[0].description);
    
    make(/*Id:*/"imgContainer",/*Parent Id:*/"dataContainer",/*Type:*/"div",/*class:*/"container h-10",/*Inner Txt:*/"");
      make(/*Id:*/"imgContTitle",/*Parent Id:*/"imgContainer",/*Type:*/"div",/*class:*/"row",/*Inner Txt:*/"");
        make(/*Id:*/"imgTitle",/*Parent Id:*/"imgContTitle",/*Type:*/"div",/*class:*/"col-4",/*Inner Txt:*/"Other Info.");
      make(/*Id:*/"imgSrcContainer",/*Parent Id:*/"imgContainer",/*Type:*/"div",/*class:*/"row bg-dark",/*Inner Txt:*/"");
        make(/*Id:*/"imageSrc",/*Parent Id:*/"imgSrcContainer",/*Type:*/"img",/*class:*/"",/*Inner Txt:*/"");
          selector("imageSrc").setAttribute("src", `http://openweathermap.org/img/wn/${state.city.weather[0].icon}@2x.png` );
}

init()
