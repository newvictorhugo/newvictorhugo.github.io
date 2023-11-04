// Mudar de div quando apertar o botão
const botaoGeral = document.getElementById('botao-geral');
const botaoFoto = document.getElementById('botao-foto');
const botaoExtra = document.getElementById('botao-extra');

const opcaoGeral = document.getElementById('opcao-geral');
const opcaoFoto = document.getElementById('opcao-foto');
const opcaoExtra = document.getElementById('opcao-extra');

botaoGeral.addEventListener('click', () => {
    opcaoGeral.style.display = 'flex';
    opcaoFoto.style.display = 'none';
    opcaoExtra.style.display = 'none';
    botaoGeral.classList.add('ativo');
    botaoFoto.classList.remove('ativo');
    botaoExtra.classList.remove('ativo');
});

botaoFoto.addEventListener('click', () => {
    opcaoGeral.style.display = 'none';
    opcaoFoto.style.display = 'flex';
    opcaoExtra.style.display = 'none';
    botaoGeral.classList.remove('ativo');
    botaoFoto.classList.add('ativo');
    botaoExtra.classList.remove('ativo');
});

botaoExtra.addEventListener('click', () => {
    opcaoGeral.style.display = 'none';
    opcaoFoto.style.display = 'none';
    opcaoExtra.style.display = 'flex';
    botaoGeral.classList.remove('ativo');
    botaoFoto.classList.remove('ativo');
    botaoExtra.classList.add('ativo');
});

// Atualizar o subtitulo Nome quando inserir um nome no input
const nomeInput = document.getElementById('nome');
const subtituloNome = document.querySelector('.subtitulo-nome h5 b');

nomeInput.addEventListener('input', function() {
  if (nomeInput.value.trim() === '') {
    subtituloNome.textContent = 'Nome';
  } else {
    subtituloNome.textContent = nomeInput.value;
  }
});

if (nomeInput.value.trim() === '') {
  subtituloNome.textContent = 'Nome';
}