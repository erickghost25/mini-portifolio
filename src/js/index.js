const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesAba(aba)
        
    });
});

function selecionarAba(aba){
    const abasSelecionada = document.querySelector(".aba.selecionado");
    abasSelecionada.classList.remove("selecionado")

    aba.classList.add("selecionado");

}

function mostrarInformacoesAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado")

        const idDoElementoDeInformacaoDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacaoDaAba)
        informacaoASerMostrada.classList.add("selecionado")
}