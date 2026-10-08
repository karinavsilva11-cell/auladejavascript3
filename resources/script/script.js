
let idade=18
let maiorDeIdade = true
let saldo = 10000


if(idade > 18){
    console.log("sou maior da idade");
}
else{
    console.log("sou menor de idade");


}
if(saldo <1000){
    console.log("fique em casa");
}
else if("saldo >=1000 && saldo <5000"){
    console.log("sair pra festa");
}
else{
    console.log("guarda dinheiro");
}



//criaça , adulto e idoso//

let userAge= Number (prompt ("digite sua idade:"));
if(userAge <=0 ){
    console.log("número inválido");

}
else if(userAge> 0 && userAge<12 ){
    console.log("você é uma criança");
}
else if(userAge> 18 && userAge< 60 ){
    console.log("você é um adulto");
}
else if(userAge>= 60 ){
    console.log("você é um(A) idosa");
}

//peso e altura//
let weight=Number(prompt("digite seu peso"));
let height=Number(prompt("digite sua altura"));


let imc= weight / (height*height)
imc=imc.toFixed(2)


if(imc< 18.5 ){
    console.log ("abaixo do peso normal")
}
else if( imc>= 18.5 && imc <=24.9 ){
    console.log("peso normal");
}
else if (imc>= 25.0 && imc<= 29.9 ){
    console.log("excesso de peso");
}
else if(imc>= 30.0 && imc<= 34.9){
    console.log("obesidade clase |");
}
else if(imc>= 35.0 && Imc<= 39.9){
    console.log("obesidade clase ||");
}
else if(imc>= 40.0){
    console.log("obesidade clase |||");
}
 
//troca

let opcao = Number(prompt("digite uma opção de 1 a 3:"));
switch(opcao){
         case 1:
        console.lo("segunda");
        break;
         case 2:
        console.lo("terça");
           break;
         case 3:
        console.lo("quarta");
           break;
             case 4:
        console.lo("quinta");
        break;
         case 5:
        console.lo("sexta");
           break;
         case 6:
        console.lo("sábado");
           break;


           default:
            console.log("opção inválido")

        
}

{
let weight=Number(prompt("digite seu peso"));
let height=Number(prompt("digite sua altura"));


let imc= weight / (height*height)
imc=imc.toFixed(2)

switch(true){
    case(Imc<18.5):
    console.log("abaixo do peso normal")
    break;
    default:
        console.log("valor inválido");
        break;
}

}