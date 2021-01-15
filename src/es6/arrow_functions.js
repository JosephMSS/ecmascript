/**
 * Arrow Functions
 */
const names=[
    {name:'Joseph',age:'21'},
    {name:'Juan',age:'22'},
]
/**
 * Pasando una funcion anonima
 */
let list_of_names=names.map(function(item) {
    console.log(item.name);
    
})
/**
 * ES6
 */
//Se pueden emplear cuando se necesite retornar un unico valor
let list_of_names2=names.map(item=>console.table(item.name));

const list_of_names3=names.map((name,age)=>{
    //...
});

/**
 * 
 * Si no vamos a pasasr una serie de elemento y solo vamos a pasar uno 
 */
const list_of_names3=name=>{
    //...
};
/**
 * 
 * @param {} num 
 * recibe como parameto un elemento y este se usa para multiplicar
 */
const square= num=>num*num;