// let num1 = parseInt(prompt("Digite um numero: ")) // 
// let num2 = parseInt(prompt("Digite o segundo numero: ")) / 

// console.log(num1 + num2)
// console.log(num1 *num2)
// console.log(num1 / num2 )
// console.log(num1 - num2)

// 1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 

// let nome = prompt("Digite seu nome: ")
// console.log(nome)
// alert(nome)

// 2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.

 //let num1 = parseInt(prompt("Digite um numero: "))
// let num2 = parseInt(prompt("Digite o segundo numero: "))

// console.log(num1 + num2)

//3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.

// let notaUm = parseFloat(prompt("Digite a primeira nota: "))
// let notaDois = parseFloat(prompt("Digite a segunda nota: "))

// console.log((notaUm + notaDois) /2)

// let notaUm = parseFloat(prompt("Digite a primeira nota: "))
// let notaDois = parseFloat(prompt("Digite a segunda nota: "))

//  console.log((notaUm + notaDois) /2)

// no alerta: alert("A média é " + (notaUm + notaDois)/2 ) 

// 4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele.

// let ano = parseInt(prompt("Digite o ano do seu nascimento: "))
// console.log(2022 - ano)


// 5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
// Calcule e mostre o total do seu salário no referido mês.


// let ganho = parseInt(prompt("Quanto voce ganha por hora: "))
// let hora = parseInt(prompt("Voce trabalha quantas horas por mes ?"))
// console.log(hora*ganho)

// 6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    
// C = 5 * ((F-32) / 9).


// // let temp = parseFloat(prompt("Diga a temperatura em graus Fahrenheit "))

// // console.log(5 * ((temp-32) / 9))










//---------- Estrutura de decisao -------------


// let num1 = parseInt(prompt("Digite o numero"))

// if(num1 % 2 == 0){
//     console.log("Esse numero é par")
// }else{
//     console.log("Esse numero é impar")
// }



// let sexo = prompt("Fale seu sexo").toLowerCase(); // para nao da erro caso bote a letra em maiusculo
// if(sexo === "f"){
//     console.log("Feminino");
// }else if(sexo ==="m"){
//     console.log("Masculino");
// }else{
//     console.log("Essce sexo e invalido");
// }

// 1.	Faça um Programa que peça dois números e imprima o maior deles.


// let num1 = parseInt(prompt("Digite o primeiro numero"))
// let num2 = parseInt(prompt("Digite o segundo numero"))

// if(num1>num2){
//     console.log("O numero 1 e maior que o numero 2 ")
// }else{
//     console.log("O numero 2 e maior que o numero 1 ")
// }

// 2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.


//   let num = parseInt(prompt("Digite o valor"))
//   if(num >=0){
//       console.log("Esse numero é positivo")
//   }else{
//       console.log("Esse numero é negativo")
//   }

// 3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.


// let sexo = prompt("Digite seu sexo").toLowerCase();
// if(sexo === "f"){
//     console.log("Feminino");
// }else if(sexo ==="m"){
//     console.log("Masculino");
// }else{
//     console.log("sexo invalido");
// }


// 4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
//1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//2.	A mensagem "Reprovado", se a média for menor do que sete;
//3.	A mensagem "Aprovado com Distinção", se a média for igual a dez.

// let nota1 = parseFloat(prompt("Digite a primeira nota:"))
// let nota2 = parseFloat(prompt("Digite a segunda nota:"))
// let nota3 = parseFloat(prompt("Digite a terceira nota:"))

// let media = (nota1 + nota2 + nota3)/3
 
// if(media >= 7 ){
//     console.log("Aluno aprovado")
// }else if(media < 7 ){
//     console.log("Aluno reprovado")
// }else if (media===10){
//      console.log("Aluno aprovado com media 10")
// }

//let num1 = parseInt(prompt("Digite o primeiro valor:"))
//let num2 = parseInt(prompt("Digite o segundo valor:"))
//let num3 = parseInt(prompt("Digite o terceiro valor:"))

//let nMaior = Math.max(num1,num2,num3)
     //let nMenor = Math.min(num1,num2,num3)
         //console.log("O maior número é: " + nMaior + ", o menor é: " + nMenor)


// 5.	Faça um Programa que leia três números e mostre o maior e o menor deles.

//function maior(){
    //let num1 = parseFloat(document.getElementById("Digite um número: "));
    //let num2 = parseFloat(document.getElementById("Digite um número: "));
    //let num3 = parseFloat(document.getElementById("Digite um número: "));

    //let maior = num1;

    //if(num2 > maior)
     //maior = num2;
    //if(num3 > maior)
     //maior = num3;

    //alert("Maior: "+maior);
   //}

// 6.   Faça um Programa que leia dois números e mostre se ele é par ou ímpar.

//let numero = parseInt(prompt("Digite um número: "))
//function calc(numero){
    //if(numero %2 === 0){
        //alert("é par!")
    //}else{
        //alert("é ímpar!")
    //}
//}
 
//calc(numero)









// ---------- Estrutura de repetição ------------

// 1.    Faça um programa que peça uma nota, entre zero e dez. 
// Mostre uma mensagem caso o valor seja inválido e continue 
// pedindo até que o usuário informe um valor válido.

//let nota = prompt(parseFloat("Digite sua nota: "))

//while(true){

//if(nota >= 0  && nota < 10) {
   // alert("Sua nota é: " + nota);
  //  break;
 //} //else {
   // alert("Nota inválida");
 //}

//}





//3.    Faça um programa que leia um nome de usuário e a 
//sua senha e não aceite a senha igual ao nome do usuário, 
//mostrando uma mensagem de erro e voltando a 
//pedir as informações.

//while(true){
//let nome = prompt("Digite seu nome: ");
//let senha = prompt("Digite sua senha: ");

//if (senha != nome){
    //alert("Senha aceita");
//}

//else if (senha == nome){
    //alert("Erro, repita o procedimento.");
//}

//}


//4. Faça um programa que imprima na tela os números de 1 a 20, 
//um abaixo do outro. Depois modifique o programa para que ele 
//mostre os números um ao lado do outro.


//for(let i = 1;i<=20;i++){
    //console.log(i);
//}

//for(let i=1; i<20; i++){
    //j = i+1
    //console.log(i,j);

//}



//5. Faça um programa que leia 5 números 
//   e informe o maior número.

//for(let i = 0; i<= 5; i++){

    //let input = parseInt(prompt("Digite um valor: "));

    //if (i === 0) {
        //maior = input;
    //}

    //if (input > maior){
        //maior = input;
    //}

//}

//alert(maior)


//6.	Faça um programa que leia 5 números e informe 
//      a soma e a média dos números.

//num1=float(input("digite o primeiro numero: "))
//num2=float(input("digite o segundo numero: "))
//num3=float(input("digite o terceiro numero: "))
//num4=float(input("digite o quarto numero: "))
//num5=float(input("digite o quinto numero: "))

//soma=num1+num2+num3+num4+num5

//print("soma-->",soma,)
//print("média-->",soma/5)


//7.	Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

//for(i = 0; i<50; i++) {

    //if(i % 2){
        //null
    //} else{
        //console.log(i)
    //}
//}


//8.	Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
//      O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:

//function tabuada(){
    //let num = parseInt(document.getElementById("num").value);
    //let resposta = document.getElementById('resposta');
    //let tabuada='';
  
    //for(var count=1; count<=10 ; count++)
     //tabuada += num+" x "+count+" = "+
                 //num*count+"<br />";
    
    //console.log(tabuada)
  //}


//DESAFIO

//9.    Dado um número n, para cada número entre 0 e 100, 
//imprime um valor por linha da seguinte maneira:

//Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
//Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
//Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
//Se i não for múltiplo de 3 ou 5, imprima o valor de i.

//for(i=1; i<=100; i++){

    //if (i % 3 === 0 && i % 5 ===0){
        //alert("FizzBuzz");
    //}

    //else if (i % 3 ===0 && i != i % 5 === 0){
        //alert("Fizz");
    //}

    //else if (i % 5 === 0 && i != i % 3 === 0){
        //alert("Buzz")
    //}

    //else{
        //alert(i)
    //}

// }









//  --------------- Exercicios de Listas ---------------

//1.	Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

//let lista = [1, 5, 3, 2, 10];
// console.log(lista);


//2.    Faça um Programa que leia um vetor 
//de 10 números reais e mostre-os na ordem inversa.

//let lista = [1,2,3,4,5,6,7,8,9,10]

//for(i === lista.length-1; i >= 0; i--){
    //console.log("Numero: "+ lista[i]);
//}

//3.	Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

//let notas = [];
//let soma = 0;
//let media = 0;

//for (let i = 0; i < 4; i++) {
  //notas.push(parseFloat(prompt("Digite sua nota: ")));
  //soma += notas[i];
//}

//media = soma/4;

//alert("Notas: " + notas + "Média: " + media);


//4.	Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.


//5.	Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor ímpar. Imprima os três vetores.

//let listaPar = []
//let listImpar = []
//for (i === 0; i < 20; i++){
       
    //alert(input("Digite um valor: "))

    //if (i % 2){
        //listaPar.push
    //}else{
        //listImpar.push
    //}

    //console.log(listaPar)
    //console.log(listImpar)
//}

 
//6.	Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.

//let listaNotas = []

//for (i === 0; i < 40; i++){
    //listaNotas.push = alert(input("Digite a nota: "))

//}

//7.	Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.


//8.	Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.








// ---------- Funções --------------


//1.	Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.

//let numero = parseInt(prompt("Digite um número!"))
//function calc(numero){
    //if(numero %2 === 0){
        //alert("Par!")
    //}else{
        //alert("Ímpar!")
    //}
//}
 
//calc(numero)

//2.	Crie uma função que receba dois números e retorne o resultado da soma entre eles. 

//function soma(num1,num2){
    //eturn parseInt(num1) + parseInt(num2);
//}

//let final = soma(4, 5);
//alert("A soma dos numeros: " + final);


//3.	Crie uma função que receba um número e retorne o oposto desse número. Exemplos de retornos:
//negativo(1) // return -1
//negativo(-5) // return 5

//function oposto(nume) {
    //if (parseInt(num) > 0) {
      //return (num += -2 * num)
    //} else {
      //return (num -= 2 * num)
    //}
  //}
  

  //console.log(oposto(4))
  
  //console.log(oposto(-40))

  //console.log(oposto(6))


//4.	Crie uma função que receba um array de números, e retorne a suma de todos os números positivos desse array. Exemplos de retornos:
//somaDePositivos([1,-4,7,12]) // 1 + 7 + 12 = 20 -> return 20

//function retorneSoma (numeros) {
    //let soma = 0;
  
    //for (i = 0; i < 4; i++) {
      //if (parseInt(nums[i]) > 0) {
        //soma += parseInt(nums[i]);
      //}
    //}
  
    //return ("A soma é: " + soma);
  //}
  
  //console.log(retorneSoma([1, -4, 7, 12]));

//5.	Dado um array de números inteiros, crie uma função que retorne o valor do menor número desse array. Exemplos de outputs:


//Dado [34, 15, 88, -2] sua solução deve retornar o -2
//Dado [34, -500, -1, 100] sua solução deve retornar o -345
