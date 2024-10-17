document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pega os valores do formulário de login
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de login para Admin
    if (username === 'admin' && password === 'admin') {
        document.getElementById('loginContainer').style.display = 'none'; // Esconde o formulário de login
        document.getElementById('adminPanel').style.display = 'block'; // Mostra o painel do administrador
    }
    // Simulação de login para Funcionário
    else if (username === 'funcionario' && password === 'funcionario') {
        document.getElementById('loginContainer').style.display = 'none'; // Esconde o formulário de login
        document.getElementById('funcionarioPanel').style.display = 'block'; // Mostra o painel do funcionário
    }
    else {
        document.getElementById('loginMessage').textContent = 'Usuário ou senha inválidos!';
    }
});
