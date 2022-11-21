const form = document.getElementById('form-atividade');
let linhas = '';
const contatos=[];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('form-nome');
    const inputTelefone = document.getElementById('form-telefone');

    if (contatos.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já existe!`);
    } else {

        contatos.push(inputNome.value);

        let linha = '<tr>';
        linha+=`<td>${inputNome.value}</td>`;
        linha+=`<td>${inputTelefone.value}</td>`;
        linha+='</tr>';

        linhas += linha;
    }
    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
