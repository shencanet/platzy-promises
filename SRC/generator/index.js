/*
Un generador en JavaScript consta de una función generadora que muestra un objeto iterable Generator. La palabra reservada yield se usa para pausar y reanudar una función generadora.
Fuente: aquí
.

    La estructura del Generador consta con la palabra function seguido de un asterísco * : function* ésta es una función generadora heredada.
    El resultado que se quiere obtener se coloca al lado derecho de yield, puede ser de cualquier tipo (string, numérico, objetos, etc) y se puede tener tantos yield que se desee.
*/

function* gen(){
    yield 1;
    yield 2;
    yield 3;

}

const g = gen();
console.log(g.next().value);//Imprime el primer yield: 1

/*
El 1 por el valor al lado derecho del primer yield.
Y done es false porque mientras haya otro yield por operar será falso.
Será true cuando se ejecute cuatro veces next() 
y la salida mostrará {value: undefined, done: true}. 
Ésto se debe a que ya no hay mas nada que mostrar
*/
//////////////////////////////
//////////////////////////////

function* iterate(array) {
    for (let value of array) {//El loop del for revisa cada elemento del array
        yield value //value es asignado en cada ciclo
    }
}

const it = iterate(['santi', 'Dionis', 'Lucia', 'Pedro']);
console.log(it.next()) //Imprime el primer elemento del array: 
 

/////////////reto generator

import fetch from'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
const urlApi = API;

//Declaración de fetchData como la función del Generador
asyncfunction* fetchData(url) {
	const response = await fetch(url);
	yieldawait response.json();
}

//Llamadas con el método next() en el objeto del Generador usando .then() y manipulando value y done
fetchData(`${urlApi}/products`).next().then(({ value, done }) => {
	console.log(value); //Imprime la lista de los Productos de la API
	
	const idProduct =value[0].id; //Extrae el id del producto que queremos manipular
 	
	console.log(`Copiame: ${urlApi}/products/${idProduct} y pegame en el navegador`);
	
	fetchData(`${urlApi}/products/${idProduct}`).next().then(({ value, done }) => {
        	
		console.log(value.title); //Imprime el Título del producto solicitado
        
		const idCategory = value.category.id;
        
fetchData(`${urlApi}/categories/${idCategory}`).next().then(({ value, done }) => {
           
			console.log(value.name); //Imprime el nombre de la categoría del producto seleccionado
        	});
    	});
});