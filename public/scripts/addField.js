//Procurar o botão

window.document.querySelector("#add-time")
    // Quando achar o botão
    .addEventListener('click', cloneField)

//Executar uma ação

function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    

    //Achar as respostas dos formularios
    const fields = newFieldContainer.querySelectorAll('input')

    //Limpar os formularios, independente da quantidade
    fields.forEach(function(field) {
        field.value = ''
    })

    //Colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}