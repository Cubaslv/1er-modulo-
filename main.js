/*
//ALMACENAR DATOS EN VARIABLES
var nombre = "ABDUL JIMENEZ";
var altura = 170;

//FIN COMENTARIO

// IMPRIMIR DATOS MANERA SIMPLE
//  document.write(nombre) ;
//  document.write(altura) ;
//FIN DE COMENTARIO

var concatenacion = nombre + " " +  altura;

// IMPRIMIR DATOS 
var datos = document.getElementById("datos");
datos.innerHTML = concatenacion;
// FIN COMENTARIO

datos.innerHTML += `

<h1> AQUI LA CAJA DE DATOS </H1>
<h2> Su nombre es: ${nombre} </h2> 
<h3> Mide: ${altura} </h3>


`;

if(altura>= 190 ) {

datos.innerHTML += ` <h1>ERES ALTO BRO </h1>`

} 
else{
datos.innerHTML += `<h1>ERES BAJO BRO</H1>`    
}

for(var i= 2000; i <= 2020; i ++) {
    // bloque de instruciones
    datos.innerHTML += "<h2>estamos en el año </h2>"+i;
}
*/
function MUESTRAMINOMBRE (nombre,altura){
    var datos = document.getElementById("datos");
datos.innerHTML = concatenacion;
    datos.innerHTML += `

<h1> AQUI LA CAJA DE DATOS </H1>
<h2> Su nombre es: ${nombre} </h2> 
<h3> Mide: ${altura} </h3>



`;
}
// 4
function convertirAMayusculas(string) {
    return string.toUpperCase();
  }
  console.log(convertirAMayusculas("hola mundo")); 
  // Output: "HOLA MUNDO"

//   5
function esPar(numero) {
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
  }
  console.log(esPar(4)); // Output: "par"
  console.log(esPar(5)); // Output: "impar"
// 6
function encontrarNumeroMayor(array) {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
      }
    }
    return mayor;
  }
  console.log(encontrarNumeroMayor([2, 7, 3, 9, 4])); // Output: 9
//   7
function elevarAExponente(base, exponente) {
    return Math.pow(base, exponente);
  }
  console.log(elevarAExponente(2, 3)); // Output: 8
//   8
function sumarNumeros(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    return suma;
  }
  console.log(sumarNumeros([1, 2, 3, 4])); // Output: 10