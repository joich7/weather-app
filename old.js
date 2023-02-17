const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'd4515e3fab03f81b376b0e441c2efe9c';

let state = {
      city: null,
     
      };
      
  
function changeState() {

  let zip = 40515;
  let zipcode = zip+",us";
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
}; 

const main = document.querySelector(".main");


 function make(elementType, className, selectedElementClassName)  {
    let classes = [];  
    classes = className.split(" ");
    
     console.log("classes = "+classes)
     const location = document.querySelector(selectedElementClassName);
     const newElement = document.createElement(elementType);
     newElement.classList.add(classes)
     // HOW DO YOU PUT PARAMETER INTO CLASSLIST AND NOT ADD''
     location.appendChild(newElement)
 }
 
 function yeet() {


   make('div', 'yeet,container,bg-dark',".main")// first div with inputs(button and zip text box)
   make('button', "b g o", '.main' );
   document.querySelector(".weatherbtn").innerHTML = 'click here';

   
    
 }


 
yeet()





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
