let email = document.getElementById('loginEmail');
let password = document.getElementById('loginSenha');
let formulario = document.getElementById('loginFormulario');
let textEmail = document.getElementById('textEmail');
let textPassword = document.getElementById('textPassword');
let textForm = document.getElementById("textForm");

formulario.addEventListener("submit", (e) => {
    if (email.value == "" && password.value == "") {
        textForm.textContent = "Você precisa preencher todos os campos!";
    } else if (validaEmail(email.value) === true &&
        validaSenha(password.value) === true) {
        console.log(email.value);
        console.log(password.value);
        textForm.textContent = "";
        textEmail.textContent = "";
        textPassword.textContent = "";
    }
    else {
        console.log("Ensira um e-mail válido e uma senha com até 6 caracteres incluindo números e letras.");

    }
    e.preventDefault();
});

//Variavél para a manipulação do campo em vermelho e texto de alerta
// Será utilizado essa parte para fazer o campo ficar vermelho até que seja colocado um valor compatível.
email.addEventListener("keyup", () => {
    if (validaEmail(email.value) !== true) {
        textEmail.textContent = "O formato do email deve ser Ex: abc@com"
    }
    else {
        textEmail.textContent = "";
    }
})

//Variavél para a manipulação do campo em vermelho e texto de alerta


password.addEventListener("keyup", () => {
    if (validaSenha(password.value) !== true) {
        textPassword.textContent = "formato da senha deve ser X Y"
    }
    else {
        textPassword.textContent = "";
    }
})




//Validando email
function validaEmail(email) {
    let emailUsuario = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailUsuario.test(email);
}

//Validando senha
//Senha precisa ter no mínimo 6 caracteres e entre eles ter número e letra e no máximo 16 caracteres.
function validaSenha(password) {
    let senhaUsuario = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return senhaUsuario.test(password);
}
