// Closure
let b = 2;
function Abc(){
    let a = 10;
    function pqr(){
        console.log(a);
    }
    pqr();
}
Abc();


let count = 0;
(function(){
    if(count===0){
        let count = 1;
        console.log(count) //what is logged ?
    }
    console.log(count) //what is logged
})();

// Question 4
function calc(length){
    function innercalc(breadth){
        return length*breadth;
    }
    return innercalc;
  }
  const ans1=calc(9);
  const area=ans1(15);
  console.log(area);


//   Question 8
  var globalVar = "xyz";

(function outerFunc(outerArg) {
var outerVar = 'a';

(function innerFunc(innerArg) {
var innerVar = 'b';

console.log(
"outerArg = " + outerArg + "\n" +
"innerArg = " + innerArg + "\n" +
"outerVar = " + outerVar + "\n" +
"innerVar = " + innerVar + "\n" +
"globalVar = " + globalVar);

})(456);
})(123);