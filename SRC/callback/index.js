function suma(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);

}

console.log(calc(2 ,2, suma))


setTimeout(function(){
    console.log("holaaa");

}, 5000)

function greetings(name){
    console.log(`HOLA ${name}`);
}

setTimeout(greetings, 2000, 'Santi');

//////////////////////////////////////////////////
/////////////////////////////////////////////////

function runCode(name, callback) {
    return setTimeout(function () {
      console.log(callback(name));
    }, 2000);
  }
  
  function name(name) {
    return `Hola ${name}`;
  }
  
  runCode('santi', name);

