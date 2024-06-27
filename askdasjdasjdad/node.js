function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11) return false;

    let soma = 0;
    let resto;
    if (cpf === "00000000000") return false;

    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto === 10)  (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto === 10)  (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

function cadastrar() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const numeroContato = document.getElementById('numeroContato').value;
    const result = document.getElementById('result');

    if (!validarCPF(cpf)) {
        result.innerHTML = "<p class='error'>CPF inválido. Por favor, tente novamente.</p>";
        return;
    }

    result.innerHTML =  `
        <h3 class='success'>Cadastro realizado com sucesso!</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>CPF:</strong> ${cpf}</p>
        <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
        <p><strong>Número para Contato:</strong> ${numeroContato}</p>
`;
}