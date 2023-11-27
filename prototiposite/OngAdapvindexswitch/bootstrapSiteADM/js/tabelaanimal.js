var animais = []; // Array para armazenar os dados

function camposValidos() {
    let vNome = document.querySelector('#nome').value;
    let vSexo = document.querySelector('#sexo').value;
    let vEspecie = document.querySelector('#especie').value;

    if (!vNome) {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }

    if (vSexo === "Selecione..." || vEspecie === "Selecione...") {
        alert("Por favor, selecione uma opção válida para Sexo e Espécie.");
        return false;
    }

    return true;
}

function adicionarItem2() {
    if (!camposValidos()) {
        return;
    }

    let vNome = document.querySelector('#nome').value;
    let vSexo = document.querySelector('#sexo').value;
    let vEspecie = document.querySelector('#especie').value;

    animais.push({ nome: vNome, sexo: vSexo, especie: vEspecie });

    let htmlLinha = `<tr>
                        <td>${vNome}</td>
                        <td>${vSexo}</td>
                        <td>${vEspecie}</td>
                    </tr>`;
    let tab = document.querySelector('#tabela');
    tab.innerHTML += htmlLinha;
}

function carregaTabela2(dados) {
    let tab = document.querySelector('#tabela');
    let html = `<tr>
                    <th>Nome</th> <th>Sexo</th> <th>Espécie</th>
                </tr>`;
    for (let animal of dados) {
        html += `<tr>
                    <td>${animal.nome}</td>
                    <td>${animal.sexo}</td>
                    <td>${animal.especie}</td>
                 </tr>`;
    }
    tab.innerHTML = html;
}

carregaTabela2(animais);
