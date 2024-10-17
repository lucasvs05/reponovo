document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores do formulário de login
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificação de login para Admin
    if (username === 'admin' && password === 'admin') {
        document.getElementById('loginContainer').style.display = 'none'; // Esconde o formulário de login
        document.getElementById('adminPanel').style.display = 'block'; // Mostra o painel do administrador
    }
    // Verificação de login para Funcionário
    else if (username === 'funcionario' && password === 'funcionario') {
        document.getElementById('loginContainer').style.display = 'none'; // Esconde o formulário de login
        document.getElementById('funcionarioPanel').style.display = 'block'; // Mostra o painel do funcionário
    }
    // Mensagem de erro caso as credenciais estejam incorretas
    else {
        document.getElementById('loginMessage').textContent = 'Usuário ou senha inválidos!';
    }
});

// Funções para simular as funcionalidades
function visualizarTodasEntregas() {
    alert('Exibindo todas as entregas...');
}

function alterarStatusEntrega() {
    alert('Alterando o status da entrega...');
}

function adicionarNovaEntrega() {
    alert('Adicionando nova entrega...');
}

function visualizarEntregasPendentes() {
    alert('Exibindo entregas pendentes...');
}
