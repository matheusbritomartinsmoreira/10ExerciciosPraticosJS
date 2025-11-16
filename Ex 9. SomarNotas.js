function calcularMediaSimples(N1, N2) {
    const media = (N1 + N2) / 2;

    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}