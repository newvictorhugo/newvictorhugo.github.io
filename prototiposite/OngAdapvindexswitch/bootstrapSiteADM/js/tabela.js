var alunos = [
  {id: 'Victor Hugo', nome: '124.990.008-56', tipo: 'Aluno', telefone: '49.294.517-2'},
  {id: 'Felipe', nome: '438.992.868-63', tipo: 'Aluno', telefone: '38.180.452-5'},
  {id: 'Andre', nome: '852.870.478-51', tipo: 'Aluno', telefone: '18.644.673-1'},
  {id: 'Ana', nome: '378.950.238-37', tipo: 'Aluno', telefone: '40.684.990-0'}
];

function camposValidos() {
  let vRA = document.querySelector('#nome').value;
  let vNome = document.querySelector('#campoCPF').value;
  let vDataNascimento = document.querySelector('#datanascimento').value;
  let vTelefone = document.querySelector('#campoCel').value;
  let vEmail = document.querySelector('#campoEmail').value;
  let vTelFixo = document.querySelector('#campoTel').value;
  let vCidade = document.querySelector('#Citys').value;
  let vEstado = document.querySelector('#Estadu').value;

  if (!vRA || !vNome || !vDataNascimento) {
      alert("Por favor, preencha os campos Nome, CPF e Data de Nascimento.");
      return false;
  }

  if (!vTelefone && !vEmail && !vTelFixo) {
      alert("Por favor, preencha pelo menos um dos campos de contato (Celular, Email ou Telefone Fixo).");
      return false;
  }

  if (vCidade === "Selecione..." || vEstado === "Selecione...") {
      alert("Por favor, selecione uma cidade e um estado.");
      return false;
  }

  return true;
}

function adicionarItem2() {
  if (!camposValidos()) {
      return;
  }

  let vRA = document.querySelector('#nome').value;
  let vNome = document.querySelector('#campoCPF').value;
  let vTipo = document.querySelector('#tipopessoa').value;
  let vTelefone = document.querySelector('#campoCel').value;

  alunos.push({ id: vRA, nome: vNome, tipo: vTipo, telefone: vTelefone });

  let htmlLinha = `<tr>
                      <td>${vRA}</td>
                      <td>${vNome}</td>
                      <td>${vTipo}</td>
                      <td>${vTelefone}</td>
                  </tr>`;
  let tab = document.querySelector('#tabela');
  tab.innerHTML += htmlLinha;
}

carregaTabela2(alunos);
