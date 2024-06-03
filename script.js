const Form = document.querySelector(".form-campos")
const campoA = document.querySelector("#campo-a")
const campoB = document.querySelector("#campo-b")


VerificarNumeros = function(valora,valorb){
    if (parseInt(valorb) > parseInt(valora)){
        return true
        
    }else{
        return false
    }
}

notificar = function(success,message){
    if (success){
        const AlertMessage = document.querySelector(".Alert-msg")
        AlertMessage.innerHTML = message
        AlertMessage.style.display = "block"
        AlertMessage.style.color = "green"
    }else{
        const AlertMessage = document.querySelector(".Alert-msg")
        AlertMessage.innerHTML = message
        AlertMessage.style.display = "block"
        AlertMessage.style.color = "red"
    }
}

Form.addEventListener("submit",function(e){
    e.preventDefault();
    if (VerificarNumeros(campoA.value,campoB.value)){
        notificar(true,"Seu formulario está correto! e foi enviado com sucesso.")
    }else{
        notificar(false,"Ops seu formulario está incorreto, tente novamente!")
    }
    campoA.value = ''
    campoB.value = ''
})


























