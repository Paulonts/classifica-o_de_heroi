function calcularNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else { 
        return "Imortal";
    }
}

let vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
let derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

let saldoVitorias = vitorias - derrotas;