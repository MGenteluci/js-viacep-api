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

    axios.get('https://viacep.com.br/ws/' + cep + "/json")
        .then(function (response) {
            var logradouro = response.data.logradouro;
            var bairro = response.data.bairro;
            var localidade = response.data.localidade;
            var uf = response.data.uf;

            logradouroElement.value = logradouro;
            bairroElement.value = bairro;
            localidadeElement.value = localidade;
            ufElement.value = uf;
            
        })
        .catch(function (error) {
            cepElement.value = 'CEP Inválido';
        });

}