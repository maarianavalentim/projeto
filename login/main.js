const form = document.querySelector('.login-form') 

const usuarioInput = form.querySelector("input[type='text']")

const senhaInput = form.querySelector("input[type='password']")

form.addEventListener('submit' , (event)=> {
    event.preventDefault();
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if(usuario === '' || senha === ''){
        alert("Por favor, preencha esse campo")
    } else if (usuario === 'usuario' && senha ===
    'senha'){
        alert("Bem vindo!")
        location.replace("/tarefa/index.html", "_self")
    } else{
        alert("Usuário ou senha incorreto, tente novamente")
    }
    
})
