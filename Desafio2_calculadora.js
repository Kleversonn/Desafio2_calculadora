let classificacaoDaVitoria;
let qtd_de_vitorias = 52;
let qtd_de_derrotas = 20;

function calcularResultadoFinal(qtd_de_vitorias, qtd_de_derrotas) {
    return qtd_de_vitorias - qtd_de_derrotas;
}

function VerificarClassificacao(qtd_de_vitorias) {
    if (qtd_de_vitorias < 10) {
        return "Ferro";
    } else if (qtd_de_vitorias >= 11 && qtd_de_vitorias <= 20) {
        return "Bronze";
    } else if (qtd_de_vitorias >= 21 && qtd_de_vitorias <= 50) {
        return "Prata";
    } else if (qtd_de_vitorias >= 51 && qtd_de_vitorias <= 80) {
        return "Ouro";
    } else if (qtd_de_vitorias >= 81 && qtd_de_vitorias <= 90) {
        return "Diamante";
    } else if (qtd_de_vitorias >= 91 && qtd_de_vitorias <= 100) {
        return "Lendario";
    } else if (qtd_de_vitorias >= 101) {
        return "Imortal";
    }
}

let saldoVitorias;

while (qtd_de_vitorias > 0) {
    saldoVitorias = calcularResultadoFinal(qtd_de_vitorias, qtd_de_derrotas);
    let nivel = VerificarClassificacao(qtd_de_vitorias);

    console.log("Parabéns! Você alcançou " + saldoVitorias + "vitorias e está no nível " + nivel + ", continue se esforçando para alcançar melhores resultados");

    if (saldoVitorias === 32) {
        console.log("Objetivo atingido!");
        break;
    }

    // Simulação de redução da quantidade de vitórias
    qtd_de_vitorias--;

}
