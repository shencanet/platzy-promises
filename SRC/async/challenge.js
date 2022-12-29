/*
.
🚨 Importante recordar que la estructura de async/await se compone por las palabras reservadas async y await:
.

    La palabra async se coloca antes de la función (la otra forma es con funciones flecha en que el async va antes que los argumentos).
    La palabra await se utiliza dentro de las funciones async.
    .

🖇️ Otra forma de hacer que async/await espere a varios llamados a la vez es con la estructura: Try /Catch:
.

    La palabra reservada try consiste en un bloque que contiene una o más sentencias, como hacíamos con resolve.
    Su cuerpo está conformado por las llaves {} las cuales se deben utilizar siempre, incluso para un bloque de una sola sentencia.
    También puede estar presente un bloque con la palabra reservada catch.
    Un bloque catch es opcional (como hacíamos con reject) y contiene sentencias que especifican que hacer si una excepción es lanzada en el bloque try.
    Si no se lanza ninguna excepción en el bloque try, el bloque catch se omite.
        .

        Ejemplo:

La estructura try / catch se asemeja a if / else, solo que catch puede detectar un error en caso de que haya uno:

        const anotherFunction = async (url_api) => {
        
        try {

        } catch (error){

        }
}


✏️*/


import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';



//Lógica de async: ir por los datos, luego esperar por ellos y finalmente retornarlos hacia el usuario
async function fetchData(urlApi){ //siempre async antes de function
    const response =  await fetch(urlApi);//hacemos uso del fetch()
    const data = await response.json();//estructura de los datos transformandolos en json
    return data; //retorna la información de la API que estamos solicitando
}

//también se puede colocar la palabra async antes del argumento y se usa arrow function
const anotherFunction = async (urlApi) => {
    //En try estará todo lo que queremos que suceda con la lógica de la aplicación
    try{
        const products = await fetchData(`${urlApi}/products`);//tofdos los productos
        const product = await fetchData(`${urlApi}/products/${products[1].id}`);//unproducto concreto
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        //console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch(error) { //Atraparemos un error en caso de que haya uno
        console.error(error);
    }
}

anotherFunction(API); //se hace el llamado