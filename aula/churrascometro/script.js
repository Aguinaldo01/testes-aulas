// carne - 400gm por pessoa + 6hs = 650
//cerveja 1200ml por pessoa + 6hs - 2000ml
//refrigerante/agua - 1000ml por pessoa + 6hs 1500ml
// crianças = 0,5

let inputadultos = document.getElementById("adultos")
let inputcrianças = document.getElementById("crianças")
let inputduração = document.getElementById("duração")

// console.log(inputadultos,inputcrianças,inputduração)

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("calculando...");

    let adultos = inputadultos.value
    let crianças = inputcrianças.value
    let duração = inputduração.value 
    
    
    let qntTotalCarne = carnePP(duração) * adultos + (carnePP(duração) / 2 * crianças)
    let qntTotalCerveja = cervejaPP(duração) * adultos
    let qntTotalbebida = bebidaPP(duração) * adultos + (bebidaPP(duração) / 2 * crianças)

    // console.log(qntTotalCarne);
    resultado.innerHTML =  `<p>${qntTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML +=  `<p>${Math.ceil(qntTotalCerveja/350)} Latas de Cerveja (350ml)</p>`
    resultado.innerHTML +=  `<p>${Math.ceil(qntTotalbebida/2000)} Garrafas de bebida (2L)</p>`
}
function carnePP(duração) {
    if (duração >= 6) {
        return 650
    }else{
        return 400
    }
    
}
function cervejaPP(duração) {
    if (duração >= 6) {
        return 2000
    }else{
        return 1200
    }
    
}
function bebidaPP(duração) {
    if (duração >= 6) {
        return 1500
    }else{
        return 1000
    }
    
}