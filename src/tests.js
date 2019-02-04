//pensar nos testes da sua aplicação javascript
function testEncode(calculeted, expect) {
    if (calculeted === expect) {
        console.info("ok!");
    } else {
        console.error("deu erro! Calculado: " + calculeted + " / Esperado: " + expect);
    }
}
//caso positivo
testEncode(encode(1, "abc"), "bcd");
testEncode(encode(25, "abc"), "zab");
testEncode(encode(11, "Rei Babar"), "Cpt Mlmlc");
testEncode(encode(40,"abc"),"opq");
testEncode(encode(1,"abcABC 123@"), "bcdBCD 123@");

//caso negativo
testEncode(encode(-1, "abc"), "zab");

function testDecode(calculeted, expect) {
    if (calculeted === expect) {
        console.info("Ok!");
    } else {
        console.error("Erro na decifragem! Calculado: " + calculeted + " / Esperado: " + expect);
    }
}

//caso positivo
testDecode(decode(1, "bcd"), "abc");
testDecode(decode(25,"zab"),"abc");
testDecode(decode(11,"Cpt Mlmlc"),"Rei Babar");
testDecode(decode(40,"opq"),"abc");
testDecode(decode(1,"bcdBCD 123@"), "abcABC 123@");
//caso negativo
testDecode(decode(-1, "zab"), "abc");