let email = document.getElementById('loginEmail');
let password = document.getElementById('loginSenha');
let formulario = document.getElementById('loginFormulario');
let textForm = document.getElementById('textForm');
formulario.addEventListener('submit', (e) => {
    if (email.value == "" && password.value == "") {
        alert("Preencha todos os campos!")
    } else {
        console.log(email.value);
        console.log(password.value);
    }
    e.preventDefault();
})