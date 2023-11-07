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

function botaoFavorito() {
  var favoritoButton = document.getElementById('favorito-button');
  var favoritoIcon = document.getElementById('favorito-icon');
  var iconAtual = favoritoIcon.getAttribute('icon');

  if(iconAtual === 'bi:star'){
    favoritoIcon.setAttribute('icon', 'bi:star-fill');
    favoritoIcon.style.color = 'rgb(255, 230, 0)';
    favoritoButton.style.backgroundColor = 'var(--paleta-cinza)';
  }else{
    favoritoIcon.setAttribute('icon', 'bi:star');
    favoritoIcon.style.color = '';
    favoritoButton.style.backgroundColor = '';
  }

}
document.addEventListener('DOMContentLoaded', toggleFavorito);

document.addEventListener('DOMContentLoaded', function() {
  var adicionarButton = document.getElementById('adicionar-button');

  adicionarButton.addEventListener('click', function() {
      var quebraVolunContato = document.querySelector('.quebra-volun-contato');
      var clonedQuebraVolunContato = quebraVolunContato.cloneNode(true);

      // Limpa os campos clonados (se desejar)
      var inputFields = clonedQuebraVolunContato.querySelectorAll('input');
      var selectFields = clonedQuebraVolunContato.querySelectorAll('select');

      inputFields.forEach(function(input) {
          input.value = ''; // Limpa o valor do campo
      });

      selectFields.forEach(function(select) {
          select.value = select.querySelector('option').value; // Define o valor do primeiro item
      });

      // Insere o clone logo após o original
      quebraVolunContato.parentNode.insertBefore(clonedQuebraVolunContato, quebraVolunContato.nextSibling);

      // Adiciona evento de clique para o botão "Excluir" no clone
      var excluirButton = clonedQuebraVolunContato.querySelector('#excluir-button');

      excluirButton.addEventListener('click', function() {
          clonedQuebraVolunContato.remove(); // Remove o clone quando o botão "Excluir" é clicado
      });
      
  });
});
