

 // Credenciais de exemplo
let credentials = [
    { email: "usuario@example.com", password: "123" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    // Verifica se as credenciais já existem
    const user = credentials.find(cred => cred.email === email && cred.password === password);

    if (user) {
        window.location.href = "loginSucesso.html"; // Redireciona para a nova página
    } else {
        alert("E-mail ou senha incorretos."); // Mensagem de erro
    }
});

// Função para adicionar novas credenciais
function addCredentials(newEmail, newPassword) {
    credentials.push({ email: newEmail, password: newPassword });
}

