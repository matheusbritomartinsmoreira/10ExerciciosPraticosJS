function formatarTelefone(num) {
    const parte1 = num.slice(0, 4);
    const parte2 = num.slice(4);
    return parte1 + "-" + parte2;
}