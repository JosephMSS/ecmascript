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
  console.log(lorem);
  console.log(lorem2);