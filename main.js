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
      console.log(response);
      state.city = response.data;
      console.log("success");
     
      
  
    })
    .catch(function (error) {
      console.log(error);
      console.log("it failed");
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
     // HOW DO YOU PUT PARAMETER INTO CLAS SLIST AND NOT ADD''
     location.appendChild(newElement)
 }
 
 function init() {


    // first div with inputs(button and zip text box)
    make(/*Id:*/"inputsContainer",/*Parent Id:*/"main",/*Type:*/"div",/*class:*/"",/*Txt:*/"");
      make(/*Id:*/"button",/*Parent Id:*/"inputsContainer",/*Type:*/"button",/*class:*/"",/*Inner Txt:*/"Get Weather");
        selector("button").addEventListener('click', getData); 

      make(/*Id:*/"zipBox",/*Parent Id:*/"inputsContainer",/*Type:*/"input",/*class:*/"button",/*Inner Txt:*/"");
 }

function weather() {
  const tempK = state.city.main.temp;
  const tempF =(tempK - 273.15) * 9/5 + 32 ;
  make(/*Id:*/"dataContainer",/*Parent Id:*/"main",/*Type:*/"div",/*class:*/"container",/*Inner Txt:*/"");
     make(/*Id:*/"cityContainer",/*Parent Id:*/"dataContainer",/*Type:*/"div",/*class:*/"",/*Inner Txt:*/"");
    
      make(/*Id:*/"temperatureContainer",/*Parent Id:*/"dataContainer",/*Type:*/"div",/*class:*/"",/*Inner Txt:*/"");
    
      make(/*Id:*/"tempContainer",/*Parent Id:*/"dataContainer",/*Type:*/"div",/*class:*/"",/*Inner Txt:*/"");
    
      make(/*Id:*/"conditionCont",/*Parent Id:*/"dataContainer",/*Type:*/"div",/*class:*/"",/*Inner Txt:*/"");
}

 init()

 



 
 






//function init() { 
//    const box = document.createElement("div");
//    box.classList.add('button','container');
//  
//    main.appendChild(box)
//
//
//    const button = document.createElement("button");
//    button.classList.add("btn");
//    button.innerHTML = "button";
//    box.appendChild(button)
//    button.addEventListener('click', () => {changeState()})
//}
//
