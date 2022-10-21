// //comentario 
// console.log("Hola mundo");
// console.log("Hola Barbara");
// //console.log("hola Jose");

// var nombre = "Barbara";


// console.log(nombre);

// console.log("hola barbar")

// console.log(nombre);

// //distintos tipos de datos
// /*

// cadena de caracteres
// numeros, enteros y decimales
// booleanos

// */

// console.log(10);
// console.log(15.5);
// console.log(15+15);
// console.log(2*6);
// console.log(23-1);
// console.log(10/2);

// var edad = 33;

// console.log(nombre)
// console.log(edad)

// console.log("el usuario es: " + nombre);

// console.log(true);
// console.log(false);

// var soyRobot = true;

// console.log(soyRobot);

// // var edadUsuario = prompt("ingrese una edad");

// // alert("El usuario tiene: " + edadUsuario);

// //operadores de relacion
// /*

// mayor >
// mayor igual >=
// menor <
// menor igual <=
// distinto !=
// igual ==
// igual estricto ===

// */

// console.log(10>5);
// console.log(10==10);
// console.log("comparacion 10..a: " + (10=="10"));
// console.log("comparacion 10..b: " + (10==="10"));

// // if(edadUsuario>18){
// //     alert("el usuario puede validar ")
// // }else{
// //     alert("el usuario no puede....")
// // }

//...............0..........1.......2.....3........4
var productos = ["oreo","mana","opera","chocolinas","pepitos","terrabusi","9 de oro","pepas"];
var precios = [25,36,45,78,100,125,400,140,36,98];
var tipo = ["dulces","dulces","dulces","dulce","dulce","dulce","saladas","dulces"]
var img = ["img1","img2","img3","img4","img5","img6","img7","img8"]

console.log(productos.length);
console.log(productos[0]);

var numero=0;

// while(numero<8){

// console.log("producto: " + productos[numero])//productos[0]...productos[1]
// console.log("Precio $:" + precios[numero] )
// console.log("tipo:" + tipo[numero] )
// console.log("imagen:" + img[numero])


// numero = numero+1;// 1..2..3....10<10?

// }

// for(var i=0;i<8;i++){

//     console.log("producto: " + productos[i])//productos[0]...productos[1]
//     console.log("Precio $:" + precios[i] )
//     console.log("tipo:" + tipo[i] )
//     console.log("imagen:" + img[i])

// }

// operador incremento ++....--

// do{
// console.log("hola do while");
// }while(true)

// var incrementar = 0;

// incrementar = incrementar + 1;

// incrementar += 1;

// incrementar++;

var productos = [];
var precios = [];
var tipo = [];


for(var i=0;i<5;i++){
   
    productos[i] = prompt("ingrese un producto")
    precios[i] = prompt("ingrese un precio")
    tipo[i] = prompt("ingrese un tipo")
   
}

console.log(productos)