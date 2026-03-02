// Arquivo: navegacao.js
// Este arquivo gerencia automaticamente o destaque azul (efeito neon) da aba ativa em todas as páginas.

document.addEventListener("DOMContentLoaded", function() {
    // 1. Descobre em qual página o usuário está no momento
    let currentPage = window.location.pathname.split("/").pop();

    // Se estiver na raiz do site (ex: github.io/teste/), entende que é o index
    if (currentPage === "" || currentPage === undefined) {
        currentPage = "index.html";
    }

    // 2. Seleciona todos os links do menu que têm a classe 'nav-link'
    const navLinks = document.querySelectorAll(".nav-link");

    // 3. Define as classes visuais (Ativo com Neon vs Inativo Cinza)
    const classeAtiva = "nav-link px-6 py-2.5 rounded-xl text-[11px] font-black uppercase bg-[#00a2ff]/10 text-[#00a2ff] border border-[#00a2ff]/30 shadow-[0_0_15px_rgba(0,162,255,0.15)] transition";
    const classeInativa = "nav-link px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition";

    navLinks.forEach(link => {
        const pageTarget = link.getAttribute("data-page");

        // Por padrão, garante que todos comecem inativos (cinza)
        link.className = classeInativa;

        // Se o data-page do botão for igual à URL atual, acende o botão (Azul Neon)
        if (currentPage === pageTarget) {
            link.className = classeAtiva;
        } 
        // Regra especial: Se clicar na FAQ, acende a aba FAQ e apaga a aba Fornecedores
        else if (window.location.hash === "#faq-alfandega" && pageTarget === "faq") {
            link.className = classeAtiva;
            
            const fornecedoresBtn = document.querySelector('[data-page="fornecedores.html"]');
            if (fornecedoresBtn) {
                fornecedoresBtn.className = classeInativa;
            }
        }
    });
});