// Solicita o nome do visitante e exibe a mensagem de boas-vindas.
var nomeVisitante = prompt("Qual é o seu nome?");
alert("Bem-vindo à Semana de Tecnologia, " + nomeVisitante + "!");

// Pergunta se o visitante deseja alterar a cor de fundo.
var desejaAlterarCor = confirm("Deseja alterar a cor de fundo?");

if (desejaAlterarCor) {
  var corEscolhida = prompt("Digite uma cor: blue, red ou green.");

  if (corEscolhida === "blue" || corEscolhida === "red" || corEscolhida === "green") {
    document.body.style.backgroundColor = corEscolhida;
  } else if (corEscolhida !== null) {
    alert("Opção inválida. A cor de fundo original será mantida.");
  }
}