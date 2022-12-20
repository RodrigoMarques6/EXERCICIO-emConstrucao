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
const btnAvançar = document.querySelector('#btn-avançar')
const div1TituloForm = document.getElementById('div1-titulo-form')
const div2ConteudoForm = document.getElementById('div2-conteudo-form')
const div3ResultadoForm = document.getElementById('div3-resultado-form')
const h2TituloForm1 = document.getElementById('h2-titulo-form1')
const h2TituloForm2 = document.getElementById('h2-titulo-form2')
const div4EditarForm = document.getElementById('div4-editar-form')

// -----------------------------------------------------------------

const dados = []

function resultadoFinal() {
    avançarForm();
}

function avançarForm() {
    btnAvançar.onclick = function (e) {
        e.preventDefault();
        const openModal = document.getElementById('dialog');
        openModal.showModal();
        const liNome = document.getElementById('liNome');
        liNome.innerText = `Nome completo: ${inputNome.value} ${inputSobrenome.value}`;
        const liEmail = document.getElementById('liEmail');
        liEmail.innerText = `E-mail: ${inputEmail.value}`;
        const liTelefone = document.getElementById('liTelefone')
        liTelefone.innerText = `Telefone: ${inputTelefone.value}`;
        const liSenha = document.getElementById('liSenha');
        liSenha.innerText = `Senha escolhida: ${inputSenha.value}`;

    }
    const btnModal1 = document.getElementById('btnModal1')
    btnModal1.onclick = function (e) {
        e.preventDefault();
        const closeModal = document.getElementById('dialog');
        closeModal.close();
        dados.push(inputNome.value);
        dados.push(inputSobrenome.value);
        dados.push(inputEmail.value);
        dados.push(inputTelefone.value);
        dados.push(inputSenha.value);
        dados.push(inputConfirmeSenha.value);
        console.log(dados);
    }
}

resultadoFinal()



// Inserir um bloqueio para envio ao continuar o form antes do modal caso os campos estejam vazios
// Verificar situação de: quando eu aperto em enviar form, ele não cria um novo array, mas adiciona no array anterior. Acho que pode ser resolveido quando eu criar um array de objetos.
// Transformar conteúdo dos inputs do form em objeto


// -----------------------------------------------------------------
// Algumas observações:
// O ".map" permite que você retorne um array a partir de um array existente;
//  Verificar no vídeo: https://www.youtube.com/watch?v=A8ATE1d_2xM

// Estudamos os métodos map, pop, push e filter. O método map serve para percorrer o array e retornar um novo array por meio de uma função callback. O método pop serve para remover o último elemento do array. O método push serve para adicionar um elemento ao array. O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
// Obs.: A sintaxe do map e do filter são muito parecidas.