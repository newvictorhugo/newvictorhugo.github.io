function validarCampo() {
    const nome = document.getElementById('nomeform');
    const sobrenome = document.getElementById('sobrenomeform');
    const email = document.getElementById('emailform');
    const comentario = document.getElementById('comenform');
    let isValid = true;

    // Limpa mensagens de erro anteriores
    document.getElementById('erroNome').textContent = "";
    document.getElementById('erroSobrenome').textContent = "";
    document.getElementById('erroEmail').textContent = "";
    document.getElementById('erroComentario').textContent = "";

    // Restaura bordas padrão
    nome.style.border = "1px solid black";
    sobrenome.style.border = "1px solid black";
    email.style.border = "1px solid black";
    comentario.style.border = "1px solid black";

    //VALIDAR NOME
    if (nome.value.trim() === "") {
        document.getElementById('erroNome').textContent = "O campo Nome deve ser preenchido.";
        nome.style.border = "2px solid red";
        isValid = false;
    } else if (/[\d]/.test(nome.value)) {
        document.getElementById('erroNome').textContent = "O campo de Nome não pode conter números.";
        nome.style.border = "2px solid red";
        isValid = false;
    }

    //VALIDAR SOBRENOME
    if (sobrenome.value.trim() === "") {
        document.getElementById('erroSobrenome').textContent = "O campo Sobrenome deve ser preenchido.";
        sobrenome.style.border = "2px solid red";
        isValid = false;
    } else if (/[\d]/.test(sobrenome.value)) {
        document.getElementById('erroSobrenome').textContent = "O campo de Sobrenome não pode conter números.";
        sobrenome.style.border = "2px solid red";
        isValid = false;
    }

    //VALIDAR EMAIL
    if (email.value.trim() === "") {
        document.getElementById('erroEmail').textContent = "O campo Email deve ser preenchido.";
        email.style.border = "2px solid red";
        isValid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
        document.getElementById('erroEmail').textContent = 'Email inválido.';
        email.style.border = "2px solid red";
        isValid = false;
    }

    //VALIDAR COMENTÁRIO
    if (comentario.value.trim() === "") {
        document.getElementById('erroComentario').textContent = "O campo Comentário deve ser preenchido.";
        comentario.style.border = "2px solid red";
        isValid = false;
    }
    if (!isValid) {
        event.preventDefault();
    }

    return isValid;
}

function vEmail() {
    var email = event.target.value;
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regex.test(email)) {
        document.getElementById("erroEmail").textContent = "É necessário informar um email válido";
            event.target.style.border = "2px solid red"
            return;
        }else{
            document.getElementById("erroEmail").textContent = "";
            event.target.style.border = ""
        }
}

document.querySelector(".enviar").addEventListener("click", function(event) {
    let isValid = true;

    let emaillogin = document.getElementById('logemail').value;
    let senhalogin = document.getElementById('logpass').value;

    // Verificação do email
    if(!emaillogin.trim()){
        document.getElementById("erroEmail").textContent = "É necessário informar um email válido";
        document.getElementById("logemail").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroEmail").textContent = "";
        document.getElementById("logemail").style.border = "1px solid black";
    }

    // Verificação da senha
    if(!senhalogin.trim()){
        document.getElementById("erroSenha").textContent = "É necessário informar uma senha";
        document.getElementById("logpass").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("erroSenha").textContent = "";
        document.getElementById("logpass").style.border = "1px solid black";
    }

    // Impede o envio do formulário se as validações falharem
    if (!isValid) {
        event.preventDefault();
    }
});
