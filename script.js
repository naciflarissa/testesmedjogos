function goToGame(gameType) {
    const overlay = document.getElementById('game-overlay');
    const content = document.getElementById('game-content');
    
    overlay.classList.remove('hidden');
    
    // Aqui você injeta o código de cada jogo que já desenvolvemos
    if (gameType === 'ordle') {
        content.innerHTML = `<h1>MEDordle</h1><p style="text-align:center; margin-top:50px;">Carregando tabuleiro do dia...</p>`;
        // Chamar função startMEDordle() aqui
    } else if (gameType === 'nexo') {
        content.innerHTML = `<h1>MEDnexo</h1><p style="text-align:center; margin-top:50px;">Carregando conexões do dia...</p>`;
        // Chamar função startMEDnexo() aqui
    } else if (gameType === 'caca') {
        content.innerHTML = `<h1>MEDcaça</h1><p style="text-align:center; margin-top:50px;">Gerando grid de palavras...</p>`;
        // Chamar função startMEDcaca() aqui
    }
}

function closeGame() {
    const overlay = document.getElementById('game-overlay');
    overlay.classList.add('hidden');
    document.getElementById('game-content').innerHTML = '';
}

// Atualizar data dinamicamente
document.addEventListener('DOMContentLoaded', () => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('date-display').textContent = new Date().toLocaleDateString('pt-BR', options);
});