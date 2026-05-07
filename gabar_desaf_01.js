/*
    Gabarito do desafio 01
*/

const notas = [8, 7.5, 10, 4, 11, -2, 6, 8, 5.5, 7, 3];

// 1. Remover notas inválidas
function removerNotasInvalidas(listaNotas) {
  return listaNotas.filter(nota => nota >= 0 && nota <= 10);
}

// 2. Calcular a média da turma
function calcularMedia(listaNotas) {
  const soma = listaNotas.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);

  return soma / listaNotas.length;
}

// 3. Listar apenas as notas aprovadas
function obterNotasAprovadas(listaNotas) {
  return listaNotas.filter(nota => nota >= 7);
}

// 4. Verificar se todos os alunos foram aprovados
function verificarSeTodosForamAprovados(listaNotas) {
  return listaNotas.every(nota => nota >= 7);
}

// 5. Verificar se existe pelo menos uma nota máxima (10)
function existeNotaMaxima(listaNotas) {
  return listaNotas.some(nota => nota === 10);
}

// 6. Ordenar as notas válidas em ordem decrescente
function ordenarNotasDecrescente(listaNotas) {
  return [...listaNotas].sort((a, b) => b - a);
}