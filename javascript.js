const { Script } = require("vm")

document.addEventListener("DOMContentLoaded", function() {
    // Validação de Pesquisa
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function() {
        if (searchInput.value.trim() === "") {
            alert("Por favor, insira um termo de busca.");
        } else {
          
        }
    });

    // Funcionalidade para Copiar Cupom
    const copyButtons = document.querySelectorAll(".btn-copiar");

    copyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const couponCode = button.getAttribute("data-cupom");
            if (couponCode) {
                navigator.clipboard.writeText(couponCode).then(() => {
                    alert("Cupom copiado para a área de transferência!");
                }).catch(err => {
                    alert("Não foi possível copiar o cupom.");
                });
            } else {
                alert("Nenhum cupom disponível para este produto.");
            }
        });
    });

    // Verificação de Links Quebrados
    const productLinks = document.querySelectorAll(".btn-comprar");

    productLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            const url = link.getAttribute("href");
            if (!url || url === "#") {
                event.preventDefault();
                alert("Este link está quebrado ou não disponível no momento.");
            }
        });
    });
});


// app.js
document.querySelectorAll('.btn-copiar').forEach(button => {
    button.addEventListener('click', () => {
        navigator.clipboard.writeText("CÓDIGO_DO_CUPOM").then(() => {
            alert("Cupom copiado!");
        }).catch(err => {
            console.error("Erro ao copiar cupom", err);
        });
    });
});



    // Função que calcula a diferença em minutos desde a data de publicação
function atualizarTempo() {
    // Data e hora da publicação (no formato ISO 8601)
    const dataPublicacao = new Date('2024-11-29T10:00:00'); // Substitua com a data e hora reais do post
    
    // Hora atual
    const agora = new Date();
    
    // Diferença em milissegundos
    const diff = agora - dataPublicacao;
    
    // Converte a diferença para minutos
    const minutos = Math.floor(diff / 1000 / 60);
    
    // Atualiza o conteúdo da página
    document.getElementById('post-time').textContent = `Publicado há: ${minutos} minutos`;
}

// Atualiza o tempo a cada minuto
setInterval(atualizarTempo, 60000); // 60000 ms = 1 minuto

// Chama a função uma vez para mostrar o tempo logo de cara
atualizarTempo();

