/*
Qué es una función asíncrona?
.
La declaración de función async define una función asíncrona que devuelve un objeto, lo cual permite a un programa correr una función sin congelar todo la compilación.
Dada que la finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas, se hace más fácil escribir promesas.
.
🔏 La estructura se compone por las palabras reservadas async y await:
.

    La palabra async antes de la función, hace que la función devuelva una promesa.
    La palabra await se utiliza dentro de las funciones async, lo que hace que el programa espere hasta que la variable(promesa) se resuelva para continuar.
    .
*/


const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Async -1-'), 2000)
    : reject (new Error('Error'));
    
  });  
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("hello -2-");
}

console.log("Before -3-");

anotherFn();


console.log("Afther -4-");