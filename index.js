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


// map 

const demoMap = arr.map(ele => ele*2);
console.log(demoMap);

//map return a new Array
Array.prototype.myMap = function(callBack){
  let newArr = [];
  for(let i = 0 ; i< this.length;i++){
    newArr.push(callBack(this[i],i,this))
  }
  return newArr;
}

const demoMap2 = arr.myMap((ele,index,arr) => ele*2);
console.log(demoMap2);
// forEach 
const demoForEach = arr.forEach(data => {
//  console.log(data)

} );
  console.log(demoForEach)

  Array.prototype.MyForEach = function(callback){
    for(let i=0;i< this.length;i++){
       (callback(this[i],i,this))
    }
  }
  const demoForEach2 = arr.MyForEach(data => {
   // console.log(data+100)
  
  } );
  console.log(arr);

  //find 
  //it return the 1st element other wise undefind

  const demoFind = arr.find(ele => ele == 1);
  console.log(demoFind);

  Array.prototype.MyFind = function(callback){
    if(this === null || this === undefined){
      throw new TypeError ;
    }
    for(let i= 0 ;i< this.length;i++){
      if(callback(this[i],i,this)){
        return this[i];
      }
    }
  }
  const demoFind2 = arr.MyFind(ele => ele == 5);
  console.log(demoFind2);


  // reduce return a sum of al element 

  //arrar.reduce(function(total,currentIndex,currentIndex,arr),initialValue)

  const demoReduce = arr.reduce((total,current,currentindex,arr)=> {
    return total+current;
  })
  console.log(demoReduce);

  Array.prototype.myReduce = function(callback,init){
   
    for(let i=0;i< this.length;i++){
      init = callback(init, this[i],i,this);
    }
    return init;
  }
  const demoReduce2 = arr.myReduce((total,current) =>{
    return total+current;
  },1);
  console.log(demoReduce2);
 //promice.all();
 //promice.all have input as a array and the output as an array.
 // in input we can pass both promice and normal value. it contain both async and sync promices.
const promice1 =  Promise.reject(3);
const promice2 = 'prachi'
const promice3 = new Promise((resolve,reject)=>{
  setTimeout(resolve,1000,'malla')
})
const all = Promise.all([promice3,promice2,promice1]).then(data=>{
  console.log(data)
  return data
});

const any = Promise.any([promice1,promice2,promice3]).then(data =>{
  console.log(data)
  
})

// console.log(all);
// promice.all() polyfill

Promise.myAll = function(value){
  return new Promise((resolve,reject) =>{
    let reault = [];
    let complete = 0  ;
    value.forEach((ele ,index)=>{
      Promise.resolve(ele).then(data =>{
        reault[index] = data ;
        complete++;
        if(value.length === complete ){
          resolve(reault)
        }
      }).catch(err =>{
        reject(err)
      })
    })
  }) 
}
const all1 = Promise.myAll([promice3,promice2,promice1]).then(data=>{
//  console.log(data)
  return data
});
//// promice.any() polyfill
//it return any of the promice has been reslove it return a promice having 1st reslove value

Promise.Myany = function(value){
 let rejectCount = 0;
  return new Promise((resolve,reject)=>{
    value.forEach(data =>{
      Promise.resolve(data).then(ele => {
        resolve(ele)
      }).catch(ele =>{
        rejectCount++;
        if(rejectCount === value.length || value.length == 0){
          reject(err);
        }

      })
    })

  })
  
}
const any2 = Promise.Myany([promice1,promice2,promice3]).then(data =>{
  console.log(data)
  
})
//race() 
const race = Promise.race([promice1,promice2,promice3]).then(data =>{
  console.log(data)
  
}).catch(error =>{
  console.log(error)
})

Promise.myRace = function(value){
  return new Promise((resolve,reject)=>{
    value.forEach(ele=>{
Promise(resolve(ele)).then(e=>{
  resolve(e);
}).catch(err =>{
  reject(err)
})
    })
  })
}
const race1 = Promise.myRace([promice1,promice2,promice3]).then(data =>{
  console.log(data)
  
}).catch(error =>{
  console.log(error)
})



//promices // not working 

const demoPromise = new Promise((resolve,reject)=>{
  resolve(4)
}).then(data =>{
  console.log(data);
}).catch(err => {
  consoe.log(err)
})

class myPromise{
  constructor(executor){
    this.value =null;
    this.onFulfiled = null;
const reslove = (value)=>{
this.value = value;
this.onFulfiled =this.value;
}
executor(reslove)
  }
  
 then(callback){
  this.onFulfiled = callback;
  return this;
} 
}
const demoPromise2 = new myPromise((resolve,reject)=>{
  resolve(4)
}).then(data =>{
  console.log('z',data);
})

//Iterators in JavaScript

const ele = ['A','B','C','D','E','F'];

const myIterators = function(ele){
  let lastIndex = 0;
  // it return a object
  return {
    next: function(){
      if(lastIndex < ele.length){
        return ele[lastIndex++]
       }else{
         return 'Done'
       }
    }
  }
}
const data = myIterators(ele);

console.log(data.next())
console.log(data.next())
console.log(data.next())