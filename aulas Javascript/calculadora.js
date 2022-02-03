function calculadora (){
    const operacao = Number( prompt('escolha uma operacao:\n 1 - Soma(+) \n 2 - Subtracao (-)\n 3- Multiplicacao (*)\n 4 - divisao real(/)\n 5 - Divisao inteira (%)\n 6 - Potencializacao (**) '));
 //   console.log(operacao);
 let N1 = Number(prompt('INSIRA O PRIMEIRO VALOR'));
 let N2 = Number(prompt('INSIRA O SEGUNDO VALOR:'));
 let resultado;

    function soma(){
        resultado = N1+N2 
        alert(`${N1} + ${N2} = ${resultado}`)
    }
    function subtracao(){
        resultado = N1-N2
        alert(`${N1} - ${N2} = ${resultado}`)
    }
    function multiplicacao(){
        resultado = N1*N2
        alert(`${N1} * ${N2} = ${resultado}`)
    }
    function divisaoreal(){
        resultado = N1/N2
        alert(`${N1} / ${N2} = ${resultado}`)
    }
    function divisaointeira(){
        resultado = N1%N2
        alert(`${N1} % ${N2} = ${resultado}`)
        novaoperacao()
    }
    function potencializacao(){
        resultado = N1**N2
        alert(`${N1} ** ${N2} = ${resultado}`)
        novaoperacao();
    }
function novaoperacao(){
    resultado = N1==N2
    let opcao = prompt('Deseja fazer outr operação? \n 1 - sim \n 2 - não');
    if (opcao == 1) {
        calculadora();
    } else id(opcao == 2) {
    alert('Até mais')
    } else {
    alert('digite uma opção valida')
    novaoperacao();
    } 
}
if (operacao == 1){
    soma();
    }
    else if (operacao ==2) {
        subtracao();
    }else if (operacao == 3) {
        multiplicacao()
    }
    else if (operacao == 4) {
        divisaoreal()
    }
    else if (operacao == 5) {
        divisaointeira()
    }
    else if (operacao == 6) {
        potencializacao()
    }
}
calculadora();



)
