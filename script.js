// const letA = 174
// let letB = "anonimo"

// console.log(typeof letB)
// console.log(12 + (3 * 4))
// console.log(12 * (34 - 12));
// console.log("teria \n espaço pra mim???");
// console.log("ola  " + letA   + "  entendi")
// console.log('textando isso aquie: ${2 + 2}');

// console.log(6 > 9);
// console.log(19 >= 8);

// console.log(5 > 1 && 3 > 2);
// console.log(5 > 1 && 23 > 21);
// console.log(4 > 5 && 11 > 9);
// console.log(4 > 5 || 11 > 9);

// function caledo (){
//     if (2 > 4) {
//         console.log("menorzin");
//     } else {
//         console.log("maiorzin");
//     }
// }



// const botao = document.getElementById("botao")
// let botao1 = document.getElementById("botao1")
// let botao2 = document.getElementById("botao2")
// let resultadin = document.getElementById("resultadin")


// const x = prompt("digite um numero");

// console.log("você tem " + x);

// console.log(Math.max(12, 324, 414, 23));

// console.log(Math.floor(2.12));

// console.log(Math.ceil(1.12));

// console.log("ola");

// console.error("ERRO");

// console.warn("CUIDADO");

// function alertar() {
   // alert("deu certo")
// }


// botao.addEventListener("click", alertar) 

    // let o = 10

    //do {
      //  console.log("valor de o eh" + o);
       // o--
    // } while (o > 1) {
        
    // }

//     for (let a = 0; a < 10; a++){
//         if (a % 2 === 0) {
//             console.log("numero impar ");
//             continue
//         }

//         console.log(a);
//     }

//     let sominha = function(params) {
//         console.log("oie");
//     }
    
//     sominha()

//     const funcaoArrow = () => {
//         console.log("mas qual a utilidade");
//     }

//     funcaoArrow()

// function oie(nome, prazer = 'oieee quem esse é vc??') {

//     return prazer + nome
    
// }

// console.log(oie("Gui"))

// console.log(oie("Guii", "bem vindo"))




// const num = 6

// const result = fatorial(num)

// console.log("o fatorial do numero " + num + "eh " + result);

// const numeros = [1, 2, 3, 4]

// const todosNumeros = numeros.concat(numeros)

//  console.log(todosNumeros);

// console.log(numeros.indexOf(2));//

// const carrinho = {
//     janela: 1,
//     porta: 4,
//     pneus: 2
// } 

// carrinho.radio = 1

// console.log(carrinho);

// delete carrinho.radio

// console.log(carrinho);

const casinha = {
janela: 1,
porta: 2
}

 const AP = {
    campainha: 1
 }
 

//  Object.assign(AP, casinha)

//  console.log(AP);

//  console.log(Object.keys(casinha));

//   console.log(Object.keys(AP));

//   console.log(Object.entries(casinha));

//   const a = casinha

//   console.log(a);

const pessoas = ["Gui", "Brenin", "Marcelin", "Ryanzin", "Aninha"]


console.log(pessoas.includes("Brenin")); 

const testepad = "2"; 

const novoCompad = testepad.padStart(5, "3");

const otoCompad = testepad.padEnd(7, "2")

const utilCompad = novoCompad.padEnd(8, "9")

console.log(testepad);

console.log(novoCompad);

console.log(otoCompad);

console.log(utilCompad);
