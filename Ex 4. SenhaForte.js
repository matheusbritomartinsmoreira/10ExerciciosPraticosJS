function SenhaForte(senha) {
    if (senha.length > 8 && senha !== "12345678") {
    else if (senha.length > 8 && senha !== "87654321")
    else if (senha.length > 8 && senha !== "abcdefgh")
        return true;
    } else {
        return false;
    }
}