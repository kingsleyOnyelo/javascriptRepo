const myHouse = {
    wallColor : "blue",
    tv : "plasma",
    bathroom : (tap) => {
      console.log("use the shower always");
    }
}


myHouse.bathroom("I want to bath");

const foo = {
  color : "red",
  getColor : function(){
    //make this function return foo.color
    //without using the word: "foo"
    console.log(this.color);
  }
}

foo.getColor();

//creatiing a Calculator functional constructor and it's prototype

const Calculator = function(){};

Calculator.prototype.add = function(val1,val2){
      console.log(val1 + val2);
}

Calculator.prototype.sub =  function(val1, val2){
  console.log(val1 - val2);
}

Calculator.prototype.div =  function(val1, val2){
  console.log(val1/val2);
}

Calculator.prototype.mul =  function(val1, val2){
  console.log(val1*val2);
}

//new instance of the Calculator functional constructor
let myCalculator = new Calculator();

//calling the newly created instance and referencing the sub //prototype
myCalculator.sub(8,5);



//this function is used to return names of lotto winners
function winners(){
const rand = Math.floor((Math.random() *10)+1);

let arrNames = ["Femi", "Kingsley", "Omotayo","Chidi","Edward", "Ray", "Yuki", "Favour", "Aminat", "Oiza","Musa"];

for(let i = 0; i<rand; i++){
     console.log("Here are the list of the winners ==>  " + arrNames[i]);
}
}


const listNames = (callback) => {
//setTimeout(()=>{}, 2000);
return callback();
}

console.log(listNames(winners));





