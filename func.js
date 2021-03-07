
//pt 1. função anonima com uma constante atribuida
const subtrai = function (x, y) {
    return x - y;
  }
  console.log(subtrai); 
  //console.log(subtrai(10,8));

  //pt 2. função arrow com condicional

  const testazero = (b) => {
    if (b ===0) {
      return console.log("O valor é zero"); //return não é obrigatorio para mostrar o resultado
    } else {
      return console.log("O valor não é zero");
  }
  }
  console.log(testazero); 

  /*exemplos
  console.log(testazero(0));
  console.log(testazero(7)); */

  //pt 3. função chamando a subtrai e utilizando operadores logicos

  function testasinal(x, y) {
    if (subtrai(x,y)===0) {
      console.log("é zero")  
    } else if ((x>0 & y>0) || (x<0 & y<0)) {
       console.log("subtração entre números de mesmo sinal")
   } else {
        console.log("subtração entre números de sinal diferente"); 
 }
 }
 console.log(testasinal)
 /* exemplos
 console.log(testasinal(5,5));
 console.log(testasinal(5,-6));
 console.log(testasinal(7,-4));*/