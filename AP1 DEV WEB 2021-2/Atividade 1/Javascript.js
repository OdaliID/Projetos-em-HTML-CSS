var botao = document.getElementById('btn');
botao.addEventListener("click", function (e) {
    e.preventDefault();

    var input = document.getElementById("idade").value;

    var calculo = input%2==0 ? 'par' : 'impar';

    var resultado = document.getElementById('resultado');

    resultado.innerText = calculo;
});