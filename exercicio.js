document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM está funcionando perfeitamente.')
})

const form = document.querySelector('#form')
const inputNome = document.getElementById('input-nome')
const inputSobrenome = document.getElementById('input-sobrenome')
const inputEmail = document.getElementById('input-email')
const inputTelefone = document.getElementById('input-telefone')
const inputSenha = document.getElementById('input-password')
const inputConfirmeSenha = document.getElementById('input-confirme-password')
const btnEnviar = document.querySelector('#btn-enviar')

// -----------------------------------------------------------------
// Caso quisesse transformar os dados dos inputs em array:
// const dados = []

// btnEnviar.onclick = function (e) {
//     dados.push(inputNome.value)
//     dados.push(inputSobrenome.value)
//     dados.push(inputEmail.value)
//     dados.push(inputTelefone.value)
//     dados.push(inputSenha.value)
//     dados.push(inputConfirmeSenha.value)
//     console.log(dados)
//     e.preventDefault()
// }

// -----------------------------------------------------------------


btnEnviar.onclick = function () {
    function transformaEmObjeto(e) {
        const dados = new Object()
        dados.inputNome.value
    }
    transformaEmObjeto()
    e.preventDefault()
}



