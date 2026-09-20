
let nome = prompt("Qual é o seu nome?");

let renda = prompt("Qual é a sua renda mensal?");
renda = Number(renda);

while (isNaN(renda)) {
    renda = prompt("Valor inválido. Digite um número para a renda mensal:");
    renda = Number(renda);
}

let quantidadeDespesas = prompt("Quantas despesas você quer informar? (entre 1 e 5)");
quantidadeDespesas = Number(quantidadeDespesas);

while (isNaN(quantidadeDespesas)) {
    quantidadeDespesas = prompt("Valor inválido. Digite um número para a quantidade de despesas:");
    quantidadeDespesas = Number(quantidadeDespesas);
}

// Regra: limite entre 1 e 5
if (quantidadeDespesas < 1) {
    quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
    quantidadeDespesas = 5;
}
// 3. Lançamento de despesas com for
let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {
    let valorDespesa = prompt("Digite o valor da Despesa " + i + ":");
    valorDespesa = Number(valorDespesa);

    while (isNaN(valorDespesa)) {
        valorDespesa = prompt("Valor inválido. Digite o valor da Despesa " + i + ":");
        valorDespesa = Number(valorDespesa);
    }

    totalDespesas = totalDespesas + valorDespesa;
}
// 4. Análise com if/else
let sobra = 0;
let mensagem = "";

if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    sobra = renda - totalDespesas;

    if (sobra >= renda * 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "😊 Ok: dá para melhorar a sobra.";
    }
}
// 5. Saída final
let rendaFormatada = renda.toFixed(2);
let totalDespesasFormatado = totalDespesas.toFixed(2);
let sobraFormatada = sobra.toFixed(2);

let resultado =
    "Nome: " + nome + "\n" +
    "Renda: R$ " + rendaFormatada + "\n" +
    "Total de despesas: R$ " + totalDespesasFormatado + "\n" +
    "Sobra: R$ " + sobraFormatada + "\n" +
    "Classificação: " + mensagem;

alert(resultado);

console.log("===== RESULTADO DO ORÇAMENTO =====");
console.log("Nome:", nome);
console.log("Renda: R$", rendaFormatada);
console.log("Total de despesas: R$", totalDespesasFormatado);
console.log("Sobra: R$", sobraFormatada);
console.log("Classificação:", mensagem);
console.log("===================================");