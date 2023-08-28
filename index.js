// MARIANA FERNANDES DE OLIVEIRA

// 1
// console.log("a. ", false);
//console.log("b. ", false);
//console.log("c. ", true);
//console.log("d. ", typeof Boolean)

// 2. o valor recebido como resposta no prompt é um texto. No console, serão impressos dois números agrupados e não somados.

// 3.  para que os dois números sejam somados, será necessário utilizar a função Number() para converter o valor obtido no prompt para número.

// B. ESCRITA DE CÓDIGO
// 1.

let idade;
let idadeMelhorAmigo;
idade = prompt("Qual sua idade?");
idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?");

console.log("Sua idade é maior que a idade do seu melhor amigo?", (idade > idadeMelhorAmigo));
console.log(Number(idade - idadeMelhorAmigo)); 

// 2.
let numeroPar;
numeroPar = prompt("Insira um número par");
console.log(numeroPar % 2); 

// c) o resultado para todos os números pares é 0;
// d) o resultado para todo os números ímpares é 1;


// 3.

let idadeAnos;
idadeAnos = prompt("Quantos anos você tem?");
console.log("Idade em meses", Number(idadeAnos) * 12);
console.log("Idade em dias", Number(idadeAnos) * 365);
console.log("Idade em horas", Number(idadeAnos) * 365 * 24);


// 4.
let primeiroNumero;
let segundoNumero;
primeiroNumero = prompt("insira um número");
segundoNumero = prompt("insira outro número");

console.log("O primeiro número é maior que o segundo?", (primeiroNumero > segundoNumero));
console.log("O primeiro número é igual ao segundo?", (primeiroNumero === segundoNumero));


console.log("O primeiro numero é divisível pelo segundo?", Boolean(primeiroNumero % segundoNumero));
console.log("O segundo numero é divisível pelo primeiro?", Boolean(segundoNumero % primeiroNumero));
