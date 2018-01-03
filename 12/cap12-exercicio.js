function calcular(){
    var valor = document.getElementById("valor").value,
    horas = document.getElementById("horas").value,
    total = parseInt(horas) * parseInt(valor),
    nome = document.getElementById("nome").value;

    document.getElementById("total").innerHTML = nome + " recebe esta semana R$" + total;
}