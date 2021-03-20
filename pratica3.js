const login = prompt("Digite seu usuário:");
const senha = prompt("Digite a senha:");

const loginAluno = 'aluno';
const senhaAluno = 123;

const loginProfessor = 'professor';
const senhaProfessor = 456;

if (login == loginAluno && senha == senhaAluno) {
    alert("Login feito com sucesso!");
} 
else if (login == loginProfessor && senha == senhaProfessor) {
    alert("Login feito com sucesso!");
} 
else {
    alert("Usuário ou senha incorretos!");
}
