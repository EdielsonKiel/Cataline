var button = document.querySelector('#app button')
var input = document.querySelector('#app input#email')

button.addEventListener('cadastrar', function () {
    alert('seu E-mail é: ' + input.value)
})