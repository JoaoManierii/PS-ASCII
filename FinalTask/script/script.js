// Função para mostrar a seção relevante ao botão clicado
function mostrarSecao(secaoId) {
    // Esconder todas as seções
    document.querySelectorAll('section').forEach(function (secao) {
        secao.classList.add('block');
    });
    // Mostrar a seção desejada
    document.getElementById(secaoId).classList.remove('hidden');
}


document.getElementById('educacaoBtn').addEventListener('click', function () {
    mostrarSecao('educacao');
});

document.getElementById('habilidadesBtn').addEventListener('click', function () {
    mostrarSecao('habilidades');
});

document.getElementById('softSkillsBtn').addEventListener('click', function () {
    mostrarSecao('softSkills');
});