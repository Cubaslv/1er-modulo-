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
MUESTRAMINOMBRE("SAMSON",165);             