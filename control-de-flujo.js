/* var nombre = "juan"; */

/* let nombre = "juan";

function saludar() {
    console.log("Hola" + nombre)
}

saludar() */

/* function saludar() {
    let nombre = "juan"

    console.log("Hola" + nombre)
}

saludar()

console.log(nombre); */

/* if (true) {
    var nombre = "juan"
    console.log("Hola" + nombre)

}

console.log(nombre); */

/* let = a = 1, b = "2"; */

/* Operadores de comparacion
a == b si contienen el mismo valor - no evalua el tipo de dato

a === b se evalua tanto tipo de dato como valor en si. */

/* a != b se evalua si tienen distinto valor
a !== b se evalua si son distinto valor y tipo */

/* !Estructuras Repetitivas */

/* a > b
a >= b */

/* a < b
a <= b */

/* !Operadores Aritmeticos */
/* Suma +
Resta -
Multiplicar X
Dividir /
Potencia ** ej: 2**4 */


/* if (a !== b) {
    console.log("Es cierto que son distintos");
}
else {
    console.log("No es cierto que son distintos");
} */

/* let dia = 4;

if (dia === 1) {
    console.log("lunes")
} else if (dia === 2) {
    console.log("martes")
} else if (dia === 3) {
    console.log("miercoles")
} else if (dia === 4) {
    console.log("jueves")
} else if (dia === 5) {
    console.log("viernes")
} else if (dia === 6) {
    console.log("sabado")
} else if (dia === 7) {
    console.log("domingo")
} else {
    console.log("Valor ingresado incorrecto")
} */

/* let dia = 4;
console.log(dia)
switch (dia) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;

    default:
        console.log("valor incorrecto")
        break;
} */


/* !Estructuras Repetitivas */

/* a > b
a >= b */

/* a < b
a <= b */

/* !Operadores Aritmeticos */
/* Suma +
Resta -
Multiplicar X
Dividir /
Potencia ** ej: 2**4 */

/* for (let i = 0; i < 11; i++) {
    console.log(i);
    console.log("8 x " + i + " = " + 8 * i) 

Template String
    console.log(`8 x ${i} = ${8 * i}`)
} */

/* let index = 0;
index < array.lenght;
index++ */

/* let value = false
while (value === false){
    console.log("Estoy dentro del bucle")
    value = false
} */

/* ENTRA EN BUCLE */

/* console.log("Estoy fuera del bucle")

let value = true;
do{
console.log("Estoy dentro del bucle")
value = false
}
while(false) */

/* ! Operador Ternario */

let dia = 3;

(dia === 1)
    ? console.log("lunes")
    : (dia === 2)
        ? console.log("martes")
        : (dia === 3)
            ? console.log("miercoles")
            : (dia === 4)
                ? console.log("jueves")
                : (dia === 5)
                    ? console.log("viernes")
                    : (dia === 6)
                        ? console.log("sabado")
                        : (dia === 7)
                            ? console.log("domingo")

                            : console.log("Valor ingresado incorrecto")

if (true) {
    (true) ? console.log("Ok") : console.log("No Ok")
}

/* let dia = 1;
(dia === 1)
    ? console.log("Lunes")

    : console.log("Martes") */


let listaCompras = ["Pan", "Mayonesa", "Tomate", "Milanesas"]

for (const item of listaCompras) {
    console.log(item)
}