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


//filter 
//its return a new Array
// for loop
// check the condition with the each element
const arr = [1,2,3,1,4,5,2,1,9,8];
const fildata = arr.filter(data => data == 1
);
console.log(fildata);

Array.prototype.myFilter = function(func){
  if (this === void 0 || this === null) {
    throw new TypeError();
  }
  let arr = this;
  let retArr = []
  
 for(let i = 0 ;i<= arr.length ; i++){
if(func(this[i],i,this)){
  retArr.push(arr[i]);
}
 }
return retArr;
}
console.log(arr.myFilter((data,index,arr) => data==1));


