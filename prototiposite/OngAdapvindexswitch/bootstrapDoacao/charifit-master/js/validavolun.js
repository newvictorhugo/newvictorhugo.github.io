document.querySelector("#volunteer-submit").addEventListener("click", function(event) {
    let isValid = true;

    // Validação do Nome Completo
    const nome = document.querySelector("#volunteer-form-name").value;
    if (!nome.trim()) {
        document.getElementById("erroNome").textContent = "É necessário informar o Nome Completo.";
        document.querySelector("#volunteer-form-name").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroNome").textContent = "";
        document.querySelector("#volunteer-form-name").style.border = "1px solid black";
    }

    // Validação do Email
    const email = document.querySelector("#volunteer-email").value;
    if (!email.trim()) {
        document.getElementById("erroEmail").textContent = "É necessário informar o Email.";
        document.querySelector("#volunteer-email").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroEmail").textContent = "";
        document.querySelector("#volunteer-email").style.border = "1px solid black";
    }

    // Validação do Telefone
    const telefone = document.querySelector("#volunteer-phone").value;
    if (!telefone.trim()) {
        document.getElementById("erroTel").textContent = "É necessário informar o Telefone.";
        document.querySelector("#volunteer-phone").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroTel").textContent = "";
        document.querySelector("#volunteer-phone").style.border = "1px solid black";
    }

    // Validação do Endereço
    const endereco = document.querySelector("#volunteer-address").value;
    if (!endereco.trim()) {
        document.getElementById("erroEndereco").textContent = "É necessário informar o Endereço.";
        document.querySelector("#volunteer-address").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroEndereco").textContent = "";
        document.querySelector("#volunteer-address").style.border = "1px solid black";
    }

    // Validação da Mensagem
    const mensagem = document.querySelector("#volunteer-message").value;
    if (!mensagem.trim()) {
        document.getElementById("erroMsg").textContent = "É necessário informar uma Mensagem.";
        document.querySelector("#volunteer-message").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroMsg").textContent = "";
        document.querySelector("#volunteer-message").style.border = "1px solid black";
    }

    // Previne o envio do formulário se algum campo estiver inválido
    if (!isValid) {
        event.preventDefault();
    }
});
