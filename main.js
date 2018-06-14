var logradouroElement = document.querySelector('#app input[name=logradouro]');
var bairroElement = document.querySelector('#app input[name=bairro]');
var localidadeElement = document.querySelector('#app input[name=localidade]');
var ufElement = document.querySelector('#app input[name=uf]');
var cepElement = document.querySelector('#app input[name=cep]');
var btnElement = document.querySelector('#app button');

btnElement.onclick = function consultarCep(){

    logradouroElement.value = '';
    bairroElement.value = '';
    localidadeElement.value = '';
    ufElement.value = '';

    var cep = cepElement.value;

    axios.get('https://viacep.com.br/ws/' + cep + '/json')
        .then(function (response) {
            logradouroElement.value = response.data.logradouro;
            bairroElement.value = response.data.bairro;
            localidadeElement.value = response.data.localidade;
            ufElement.value = response.data.uf;
            
        })
        .catch(function (error) {
            cepElement.value = 'CEP Inválido';
        });

}