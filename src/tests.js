function verifiedEncode(calculeted, expect) {
    if (calculeted === expect) {
        console.info("ok!");
    } else {
        console.error("deu erro! Calculado: " + calculeted + " / Esperado: " + expect);
    }
}
//caso positivo
verifiedEncode(encode(1, "abc"), "bcd");
verifiedEncode(encode(25, "abc"), "zab");
verifiedEncode(encode(11, "Rei Babar"), "Cpt Mlmlc");
verifiedEncode(encode(40,"abc"),"opq");
verifiedEncode(encode(1,"abcABC 123@"), "bcdBCD 123@");

//caso negativo
verifiedEncode(encode(-1, "abc"), "zab");

function verifiedDecode(calculeted, expect) {
    if (calculeted === expect) {
        console.info("Ok!");
    } else {
        console.error("Erro na decifragem! Calculado: " + calculeted + " / Esperado: " + expect);
    }
}

//caso positivo
verifiedDecode(decode(1, "bcd"), "abc");
verifiedDecode(decode(25,"zab"),"abc");
verifiedDecode(decode(11,"Cpt Mlmlc"),"Rei Babar");
verifiedDecode(decode(40,"opq"),"abc");
verifiedDecode(decode(1,"bcdBCD 123@"), "abcABC 123@");
//caso negativo
verifiedDecode(decode(-1, "zab"), "abc");