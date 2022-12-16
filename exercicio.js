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
const div1TituloForm = document.getElementById('div1-titulo-form')
const div2ConteudoForm = document.getElementById('div2-conteudo-form')
const div3ResultadoForm = document.getElementById('div3-resultado-form')
const h2TituloForm1 = document.getElementById('h2-titulo-form1')
const h2TituloForm2 = document.getElementById('h2-titulo-form2')

// -----------------------------------------------------------------
// Transformar conteúdo dos inputs do form em array:
const dados = []

function resultadoFinal() {
    enviarForm();
    // mostrarParaUsuário()
}

function enviarForm() {
    btnEnviar.onclick = function (e) {
        e.preventDefault()
        dados.push(inputNome.value)
        dados.push(inputSobrenome.value)
        dados.push(inputEmail.value)
        dados.push(inputTelefone.value)
        dados.push(inputSenha.value)
        dados.push(inputConfirmeSenha.value)
        console.log(dados)

        h2TituloForm1.style.display = 'none'
        h2TituloForm2.innerText = 'Confirmação dos dados:'
        form.style.display = 'none'
        div3ResultadoForm.innerHTML = `<ul>
        <li>Seu nome completo: <b>${inputNome.value} ${inputSobrenome.value}</b></li>
        <li>Seu e-mail: <b>${inputEmail.value}</b></li>
        <li>Seu telefone: <b>${inputTelefone.value}<b></li>
        </ul>`
    }
}

resultadoFinal()

// Transformar conteúdo dos inputs do form em objeto:


// -----------------------------------------------------------------
// Algumas observações:
// O ".map" permite que você retorne um array a partir de um array existente;
//  Verificar no vídeo: https://www.youtube.com/watch?v=A8ATE1d_2xM