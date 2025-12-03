function abrirCastelo() {
    let palavra;

    // Loop que garante execução pelo menos uma vez
    do {
      palavra = prompt("Qual é a palavra secreta?");
      
      if (palavra === null) {
        alert("❌ Você desistiu. O castelo permanece fechado.");
        return;
      }

      if (palavra.toLowerCase() !== "abracadabra") {
        alert("❌ Palavra errada! Tente novamente.");
      }

    } while (palavra.toLowerCase() !== "abracadabra");

    alert("✨ A porta se abriu! Bem-vindo ao castelo encantado!");
  }