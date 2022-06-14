// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//bind method

const name = {
  first: 'prachi',
  last:'malla'
},

function myName(state,home){
  
  return this.first + this.last + ' '+state + ' ' + home  ;
}

const fullName = myName.bind(name);
//console.log(fullName)

Function.prototype.myBind = function(...arg){
  let obj = this
  let param = arg.slice(1);
  return function(...ele){
    return obj.apply( arg[0],[...param,...ele]);
 }
}

const fullName2 = myName.myBind(name,'odisha');
console.log(fullName2('bbsr'));

