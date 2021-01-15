/**
 * let ES6 :unicamnete esta disponible en el bloque de codigo donde este llamado(scope).
 * Es mejor empezar a trabajar con let y const
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