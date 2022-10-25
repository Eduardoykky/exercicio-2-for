/*Utilizando o FOR, faça um algoritmo que receba 5 números e conte
quantos estão entre o intervalo dos números 1 - 10.
*/
var numero
var intervalo = 0
for (var contador = 0; contador < 5; contador++) {
    numero = parseInt(prompt("Insira um número"))
    if(1 <= numero && numero <= 10){
        intervalo++
    }   
}
console.log("foram passados", intervalo, "vezes")