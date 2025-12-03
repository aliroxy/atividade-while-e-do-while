function iniciarJogo() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let tentativa = prompt("Adivinhe um número entre 1 e 10:");

  // Enquanto o jogador digitar algo válido
  while (tentativa !== null) {
    tentativa = Number(tentativa);

    if (tentativa === numeroSecreto) {
      alert("🎉 Você acertou! O número era " + numeroSecreto);
      return; // finaliza o jogo
    }

    alert("❌ Errou! Tente novamente.");
    tentativa = prompt("Digite outro número ou clique em CANCELAR para sair:");
  }

  alert("Jogo encerrado.");
}