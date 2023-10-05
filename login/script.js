document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtenha os valores dos campos de entrada
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        // Realize a validação dos dados (aqui você pode adicionar validações personalizadas)

        // Exiba os dados cadastrados (neste exemplo, eles serão exibidos no console)
        console.log('Usuário:', username);
        console.log('Email:', email);
        console.log('Telefone:', phone);
        console.log('Senha:', password);

        // Limpe os campos após o envio
        registrationForm.reset();
    });
});
