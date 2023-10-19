
// Solicita uma confirmação ao usuário e armazena a resposta em 'janelaDeConfirmacao'.
const janelaDeConfirmacao = window.confirm("Seja bem-vindo(a), aventureiro(a)! Gostaria de pagar R$50,00 para passar a noite na nossa hospedagem?");

// Verifica se o usuário confirmou (pressionou 'OK' na caixa de diálogo de confirmação).
if (janelaDeConfirmacao) {
    // Se o usuário confirmou, exibe um alerta com uma mensagem sobre as camas da hospedagem.
    window.alert("Ótimo! Nós temos as melhores camas de toda a região!");
} else {
    // Se o usuário não confirmou (pressionou 'Cancelar' na caixa de diálogo de confirmação), exibe uma mensagem de desapontamento.
    window.alert("Que pena! Você parecia ser uma pessoa mais legal.");
}
