const tabs = document.querySelectorAll(".tab");
const conteudos = document.querySelectorAll(".conteudo");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // Remove o ativo
        tabs.forEach(btn => btn.classList.remove("active"));
        conteudos.forEach(c => c.classList.remove("active"));

        // Ativa o botão clicado
        tab.classList.add("active");

        // Mostra o conteúdo correspondente
        const id = tab.dataset.tab;
        document.getElementById(id).classList.add("active");

    });
});
