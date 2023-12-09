var animais = []; // Array para armazenar os dados

function camposValidos() {
    let vNome = document.querySelector('#nome').value;
    let vSexo = document.querySelector('#sexo').value;
    let vEspecie = document.querySelector('#especie').value;

    if (!vNome) {
        alert("Por favor, preencha o campo Nome.");
        document.getElementById("nome").style.border="2px solid red";
        return false;
    }else{
        document.getElementById("nome").style.border="1px solid black";
    }

    if (vSexo === "selecione" || vEspecie === "selecione") {
        alert("Por favor, selecione uma opção válida para Sexo e Espécie.");
        if(vSexo === "selecione"){
            document.getElementById("sexo").style.border="2px solid red";
        }else{
            document.getElementById("sexo").style.border="1px solid black";
        }
        if(vEspecie === "selecione"){
            document.getElementById("especie").style.border="2px solid red";
        }else{
            document.getElementById("especie").style.border="1px solid black";
        }
        return false;
    }else{
        document.getElementById("especie").style.border="1px solid black";
        document.getElementById("sexo").style.border="1px solid black";
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
