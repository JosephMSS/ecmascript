/**
 * Parametros por defecto 
 */

 /**
  *  De esta manera se hacian las funciones anteriormente
  */
 function newFunction(name,age,country) {
     var name=name||'oscar';
     var age=age||32;
     var country=country||'Costa Rica';
     console.log(name,age,country);
 }
 
 /**
 * Parametros por defecto ES6
 */
 function newFunction2(name='Oscar',age=32,country='Costa Rica') {
    console.log(name,age,country);
     
 }
 newFunction2();
 newFunction2('Joseph',18);

 /**
  * Template literals
  */
let hello="Hello";
let world="world";
let epicPhrase=hello+' '+world;
/**
 * ES6
 */
let epicPhrase2=`${hello} ${world}`;
console.log(epicPhrase);  
console.log(epicPhrase2);  