

let btn = document.querySelector('#verSenha');
let btnConfirm = document.querySelector('#verconfirmsenha');


let nome = document.querySelector('#inome');
let labelNome = document.querySelector('#labelnome');
let validNome = false;

let email = document.querySelector('#iemail');
let labelEmail = document.querySelector('#labelemail');
let validEmail = false;

let senha = document.querySelector('#isenha');
let labelSenha = document.querySelector('#labelsenha');
let validSenha = false;

let confirmSenha = document.querySelector('#iconfirmsenha');
let labelConfirmSenha = document.querySelector('#labelconfirmsenha');
let validConfirmSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');


/* Verificar se o nome é válido - colocar pelo menos 3 caracteres  */
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color:red');
        labelNome.innerHTML = 'Nome: *Insira pelo menos 3 caracteres.';
        nome.setAttribute('style', 'border-color: red');
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome: '
        nome.setAttribute('style', 'border-color: green');
        validNome = true;
    }
})

/* Verificar se o email é válido - melhorar essa lógica depois*/
email.addEventListener('keyup', () => {
    if (email.value.length <= 10) {
        labelEmail.setAttribute('style', 'color:red');
        labelEmail.innerHTML = 'E-mail: *Insira um e-mail válido.';
        email.setAttribute('style', 'border-color: red');
        validEmail = false;
    } else {
        labelEmail.setAttribute('style', 'color: green');
        labelEmail.innerHTML = 'E-mail: '
        email.setAttribute('style', 'border-color: green');
        validEmail = true;
    }
})

/* Verificar se a senha é válida - colocar pelo menos 8 caracteres */

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 7) {
        labelSenha.setAttribute('style', 'color:red');
        labelSenha.innerHTML = 'Senha: *Insira pelo menos 8 caracteres.';
        senha.setAttribute('style', 'border-color: red');
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha:'
        senha.setAttribute('style', 'border-color: green');
        validSenha = true;
    }
})

/* Verificar se a senha é válida - colocar pelo menos 8 caracteres */
confirmSenha.addEventListener('keyup', () => {
    if (confirmSenha.value != senha.value) {
        labelConfirmSenha.setAttribute('style', 'color:red');
        labelConfirmSenha.innerHTML = 'Confirmar senha: *A senha deve ser a mesma digitada no campo anterior.';
        confirmSenha.setAttribute('style', 'border-color: red');
        validConfirmSenha = false;
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green');
        labelConfirmSenha.innerHTML = 'Confirmar senha:'
        confirmSenha.setAttribute('style', 'border-color: green');
        validConfirmSenha = true;
    }
})

/* Validar o cadastro */

function cadastrar() {
    if (validNome && validEmail && validSenha && validConfirmSenha) {
        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastro realizado com sucesso!</strong>'
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = ''

        setTimeout(() =>{
            window.location.href = 'https://flaviodeaquino.github.io/bolao-copa2022/login.html'
        }, 3000)
        

    } else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente.</strong>'
        msgSuccess.setAttribute('style', 'display: none');
        msgSuccess.innerHTML = ''
        
    }
}


/*
    Revelar ou esconder senha 
*/

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#isenha')
    
    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#iconfirmsenha')
    
    if(inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})
