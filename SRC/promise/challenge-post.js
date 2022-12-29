/*
Algunos Verbos http son:
.
GET → Sirve para solicitar recurso.
POST → Sirve para la creación de recursos en el servidor.
PUT → Sirve actualizar por completo un recurso.
DELETE → Sirve para eliminar un recurso.
🖥️ ¿Cómo ver la salida después del POST?

    En el OUTPUT de la consola de VSC si todo está OK no debería salir un 400 (Bad Request).
    Para ver el objeto creado en el navegador, copiamos la dirección: https://api.escuelajs.co/api/v1/products/ y colocamos al final el número arrojado por la id del OUTPUT, si el id es 271, 
    sería: https://api.escuelajs.co/api/v1/products/271
*/



import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    //ya no se solicita informarción si no se guardará información
    const response = fetch(urlApi, {
        method: 'POST', //tiene que ir en mayúscula
        mode: 'cors', //cors es el permiso que va a tener, por defecto va estar siempre en cors
        credentials: 'same-origin', //es opcional
        headers:{
            'Content-Type': 'application/json' //necesario indicar que lo que se está enviando es de tipo json
        },
        body: JSON.stringify(data) //el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    });
    return response;
}

//En https://fakeapi.platzi.com/doc/products se consigue la estructura de como debe ser el objeto que se quiere crear con POST
const data = {
    
    "title": "219",
    "price": 219,
    "description": "A description SHEN 2",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

//podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola
postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));

    //Con PUT para actualizar un objeto
function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });
    return response;
}




const dataUpdate = {
    "title": "Se puede cambiar tambien otras caracteristicas",
    "price": 10 // no es necesario colocar todas las características del objeto, solo las que se cambiarán
}

putData(`${API}/products/271`, dataUpdate) //se debe colocar el id del objeto que se quiere modificar
    .then(response => response.json())
    .then(dataUpdate => console.log(dataUpdate));

    //Eliminar un objeto indicando el id con DELETE
function deleteData(urlApi) { //no es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        } //no es necesario especificar el body
    });
    return response;
}

const idNumber = 271; //se debe colocar el id del objeto qu se quiere modificar

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
    .then(() => {
        console.log(`Borrado ${idNumber}`); //es opcional imprimir en consola
    });