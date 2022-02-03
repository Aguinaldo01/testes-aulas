function comparanumeros(num1,num2) {
    if (!num1 || num2) return 'Defina dois números';

    const primeirafrase = criaprimeirafrase(num1,num2);
    const segundafrase = criasegundafrase(num1,num2);

    return`${primeirafrase} ${segundafrase}`;
}

function criaprimeirafrase(num1,num2) {
    let saoiguais = '';

    if (num1 != num2) {
        saoiguais = 'não';
    }
    return `Os números $(num1) e $(num2) $(saoiguais) são iguais`;
}
function criasegundafrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    if (compara10) {
        resultado10 = soma > 10;
        resultado20 = soma > 20;
    if(compara10) {
        resultado10 = 'maior'
            }
    if(compara20) {
        resultado20 = 'maior'
    }        
    return `sua soma é $(soma), que é $(resultado10) que 10 e o $(resultado20) que 20`
    }
}
console.log(comparanumeros (10,3));