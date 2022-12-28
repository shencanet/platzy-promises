//npm i node-fetch requisitos 

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI){
    return fetch(urlAPI);
};

//función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa
fetchData(`$(API)/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    }) 
    .then(() => {//se pueden anidar múltiples .then
        console.log('hola')
    })
    .catch(error => console.log(error));