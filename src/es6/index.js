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
//  newFunction2();
//  newFunction2('Joseph',18);

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
// console.log(epicPhrase);  
// console.log(epicPhrase2);  

/**
 * Multilínea antigua:
 * Con \n + concatenabamos las lineas
 */
let lorem="lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor \n"
+ "sagittis dolor ac mauris placerat tristique. Nam interdum ultrices hendrerit. Aliquam consequat porta ul"
/**
 * ES6
 */
let lorem2=`LOREM2 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor 
sagittis dolor ac mauris placerat tristique. Nam interdum ultrices hendrerit. Aliquam consequat porta ul`
//  console.log(lorem);
//  console.log(lorem2);

 /**
  *  Desestructuración antigua
  */
 let person={
     'name':'Oscar',
     'age':32,
     'country':'Costa Rica'
 }
//  console.log(person.name,person.age,person.country);
 /**
  * ES6
  */
 let {name,age,country}=person;
//  console.log(name,age,country);

/**
 * Spread Operator ES6
 */
let team=['Oscar','Julian','Ricardo'];
let team2=['Valeria','Jessica','Camila'];
let education=['David',...team,...team2];
// console.table(education);

/**
 * let ES6 :unicamnete esta disponible en el bloque de codigo donde este llamado(scope).
 * Es mejor empezar a trabajar con let
 *  */
{
    var global_var='global var';
}
{
    let global_let='global let';
    console.log(global_let);//let si es accecible
}
console.log(global_var);
// console.log(global_let);//let no es accecible
/**
 * const: este tipo de variale no se puede cambiar de ninguna manera
 */
const a='a';
// a='b'; Esto no lo va a permitir
