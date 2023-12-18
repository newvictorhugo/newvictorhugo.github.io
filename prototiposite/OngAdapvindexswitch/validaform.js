document.querySelector(".enviar").addEventListener("click", function(event) {
    let isValid = true;

    // Validação do Nome Animal
    const nomeAni = document.querySelector("input[name='nomeani']").value;
    if (!nomeAni.trim()) {
        document.getElementById("erroNomeAni").textContent = "É necessário informar o Nome do Animal.";
        document.querySelector("input[name='nomeani']").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroNomeAni").textContent = "";
        document.querySelector("input[name='nomeani']").style.border = "1px solid black";
    }

    // Validação do Nome
    const nome = document.querySelector("input[name='nome']").value;
    if (!nome.trim()) {
        document.getElementById("erroNome").textContent = "É necessário informar o Nome Completo.";
        document.querySelector("input[name='nome']").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroNome").textContent = "";
        document.querySelector("input[name='nome']").style.border = "1px solid black";
    }

    // Validação do E-mail
    const email = document.querySelector("input[name='email']").value;
    if (!email.trim()) {
        document.getElementById("erroEmail").textContent = "É necessário informar o E-mail.";
        document.querySelector("input[name='email']").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroEmail").textContent = "";
        document.querySelector("input[name='email']").style.border = "1px solid black";
    }

    // Validação do Telefone
    const tel = document.querySelector("input[name='tel']").value;
    if (!tel.trim()) {
        document.getElementById("erroTel").textContent = "É necessário informar o Telefone.";
        document.querySelector("input[name='tel']").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroTel").textContent = "";
        document.querySelector("input[name='tel']").style.border = "1px solid black";
    }

    // Validação da Data de Nascimento
    const dtnasc = document.getElementById("campoData").value;
    if (!dtnasc.trim()) {
        document.getElementById("erroData").textContent = "É necessário informar a Data de Nascimento.";
        document.getElementById("campoData").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroData").textContent = "";
        document.getElementById("campoData").style.border = "1px solid black";
    }

    // Validação do Endereço
    const endereco = document.querySelector("input[name='endereco']").value;
    if (!endereco.trim()) {
        document.getElementById("erroEndereco").textContent = "É necessário informar o Endereço.";
        document.querySelector("input[name='endereco']").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroEndereco").textContent = "";
        document.querySelector("input[name='endereco']").style.border = "1px solid black";
    }

    // Validação da Mensagem para Adoção
    const msg = document.querySelector("input[name='msg']").value;
    if (!msg.trim()) {
        document.getElementById("erroMsg").textContent = "É necessário informar a Mensagem para Adoção.";
        document.querySelector("input[name='msg']").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroMsg").textContent = "";
        document.querySelector("input[name='msg']").style.border = "1px solid black";
    }

    // Previne o envio do formulário se algum campo estiver inválido
    if (!isValid) {
        event.preventDefault();
    }


});
// Mostra a mensagem de sucesso
const aviso = document.querySelector(".aviso");
aviso.style.display = "block";

// Mostra a mensagem após 10 segundos
setTimeout(function() {
    aviso.style.display = "none";
}, 4000);  // 10000 milissegundos = 10 segundos