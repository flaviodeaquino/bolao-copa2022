/*
    Password Review
*/

let btn = document.querySelector('#verSenha');

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#isen')
    
    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

let btnConfirm = document.querySelector('#verConfirmSenha');

btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmsen')
    
    if(inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})