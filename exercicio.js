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
const div4EditarForm = document.getElementById('div4-editar-form')

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
            <li>Sua senha: <b>${inputSenha.value}<b></li>
            <p>Seus dados estão corretos?</p>
            </ul>`
            div4EditarForm.innerHTML = '<button>Continuar</button><span><button>Editar dados</button></span>'
    }
} 



resultadoFinal()

// const btnModal1 = document.getElementById('btnModal1')
// btnEnviar.onclick = function () {
//     const modal = document.getElementById('dialog')
//     modal.showModal()
// }

// btnModal1.onclick = function () {
    
//     btnModal1.close()
// }


// Implementar um modal para aparecer na confirmação dos dados do usuário.
// Transformar conteúdo dos inputs do form em objeto:


// -----------------------------------------------------------------
// Algumas observações:
// O ".map" permite que você retorne um array a partir de um array existente;
//  Verificar no vídeo: https://www.youtube.com/watch?v=A8ATE1d_2xM

// Estudamos os métodos map, pop, push e filter. O método map serve para percorrer o array e retornar um novo array por meio de uma função callback. O método pop serve para remover o último elemento do array. O método push serve para adicionar um elemento ao array. O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
// Obs.: A sintaxe do map e do filter são muito parecidas.