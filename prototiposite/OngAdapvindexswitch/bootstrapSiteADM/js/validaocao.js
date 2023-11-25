// CPF //
function mCpf() {
    var cpf = event.target.value;
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    event.target.value = cpf;
}
// Validar CPF //
function validarCPF() {
    var cpf = event.target.value;
    var ok = 1;
    var add;
    if (cpf != "") {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            ok = 0;
        if (ok == 1) {
            add = 0;
            for (i = 0; i < 9; i++)
                add += parseInt(cpf.charAt(i)) * (10 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
                ok = 0;
            if (ok == 1) {
                add = 0;
                for (i = 0; i < 10; i++)
                    add += parseInt(cpf.charAt(i)) * (11 - i);
                rev = 11 - (add % 11);
                if (rev == 10 || rev == 11)
                    rev = 0;
                if (rev != parseInt(cpf.charAt(10)))
                    ok = 0;
            }
        }
        if (ok == 0) {
            alert("Ops... Ocorreu um problema... CPF inválido!");
            //event.target.focus();
        }
    }
}

// CEP //
function mCEP() {
    var cep = event.target.value;
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
    cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2")
    event.target.value = cep;
}

// DATA //
function vData() {
    var data = event.target.value;

    // Remove tudo o que não é dígito
    data = data.replace(/\D/g, "");

    // Adiciona a primeira barra após o dia
    if (data.length >= 2) {
        data = data.substring(0, 2) + '/' + data.substring(2);
    }

    // Adiciona a segunda barra após o mês
    if (data.length >= 5) {
        data = data.substring(0, 5) + '/' + data.substring(5, 9);
    }

    // Atualiza o valor do campo com a data formatada
    event.target.value = data;
}

// RG //
function vRG() {
    var rg = event.target.value;

    // Remove tudo o que não é dígito
    rg = rg.replace(/\D/g, "");

    // Adiciona o primeiro ponto após os dois primeiros dígitos
    if (rg.length >= 2) {
        rg = rg.substring(0, 2) + '.' + rg.substring(2);
    }

    // Adiciona o segundo ponto após os cinco primeiros dígitos
    if (rg.length >= 6) {
        rg = rg.substring(0, 6) + '.' + rg.substring(6);
    }

    // Adiciona o traço após o oitavo dígito
    if (rg.length >= 10) {
        rg = rg.substring(0, 10) + '-' + rg.substring(10, 11);
    }

    // Atualiza o valor do campo com o RG formatado
    event.target.value = rg;
}
// TEL //
function mTel () {
    var tel = event.target.value;
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
       tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
       tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
       tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
       tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
       tel = tel.replace(/(.{4})$/, "-$1")
    }
    event.target.value = tel;
 }

 //Validar Email //
 function vEmail() {
    var email = event.target.value;
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regex.test(email)) {
        alert("Ops... Ocorreu um problema... E-mail precisa ter @ e .com");
        //event.target.focus();
    }
}

function vCampos() {
    var campos = [
        { id: "nome", nome: "Nome"},
        { id: "campoCPF", nome: "CPF", validacao: validarCPF },
        { id: "campoCEP", nome: "CEP", validacao: mCEP },
        { id: "campoData", nome: "Data", validacao: vData },
        { id: "campoRG", nome: "RG", validacao: vRG },
        { id: "campoTel", nome: "Telefone", validacao: mTel },
        { id: "campoEmail", nome: "Email", validacao: vEmail }
    ];
    var campo
    for (var i = 0; i < campos.length; i++) {
        campo = document.getElementById(campos[i].id);
        if (!campo.value) {
            alert("O campo " + campos[i].nome + " não foi preenchido.");
            return false;
        }
        campos[i].validacao();
    }
    return true;
}
