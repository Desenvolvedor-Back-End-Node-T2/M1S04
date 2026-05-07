/*

Você está desenvolvendo uma API para um sistema educacional. O sistema recebe um array com as notas finais 
dos alunos de uma turma.

Porém, alguns problemas foram identificados:

    - Existem notas inválidas (menores que 0 ou maiores que 10)
    - A coordenação precisa de análises rápidas sobre o desempenho da turma

Dados de Entrada (exemplo)
const notas = [8, 7.5, 10, 4, 11, -2, 6, 8, 5.5, 7, 3];

Desafio
Utilizando métodos de array, implemente soluções para as seguintes demandas:
1. Remover notas inválidas
    Considerar apenas notas entre 0 e 10
2. Calcular a média da turma
    Utilizar apenas as notas válidas
3. Listar apenas as notas aprovadas
    Considerar aprovação ≥ 7
4. Verificar se todos os alunos foram aprovados
    Retornar true ou false
5. Verificar se existe pelo menos uma nota máxima (10)
    Ordenar as notas válidas em ordem decrescente

*/