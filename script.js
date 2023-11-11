function calcular(){
    var valor1 = parseInt(document.querySelector("#valor1").value);
    var valor2 = parseInt(document.querySelector("#valor2").value);
    var operacao = document.querySelector("#selecao").value;
    var resultado;

    if(operacao == "Adição") {
        resultado = valor1 + valor2;
    } else if (operacao == "Subtração") {
        resultado = valor1 - valor2;
    } else if (operacao == "Divisão" && valor2 !== 0) {
        resultado = valor1 / valor2;
    } else if (operacao == "Multiplicação") {
        resultado = valor1 * valor2;
    }
    
    document.querySelector("#mensagem").innerHTML = resultado;
}
