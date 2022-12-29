//Date es un objeto y para empezar a trabajar con él debemos instanciarlo

let fechaActual = new Date();

console.log(fechaActual);
console.log(fechaActual.getDate());//dia del mes
console.log(fechaActual.getMonth());//mes contando de 0 
console.log(fechaActual.getFullYear());//año
console.log(fechaActual.getDay());//dia de la semana


//¿Te gustaría conocer el día de la semana en que naciste con Javascript?

const days = {
    0: 'Domingo',
    1: 'lunes',
    2: 'Martes',
    3: 'Miercoles',
    4:  'Jueves',
    5:  'Viernes',
    6:  'Sabado'

}


//frecha cumpleaños empezando año mes dia restando 1 al mes enero es 0
let birthday = new Date(2008, 9, 10);
console.log(days[birthday.getDay()]);

//timestamp milisegundos 1 enero 1970
let fechaActual2 = new Date();
console.log(fechaActual.getTime());
console.log(Date.now());
console.log(+fechaActual);


