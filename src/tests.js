//pensar nos testes da sua aplicação javascript
function testEncode(calculeted, expect) {
    if (calculeted === expect) {
        console.log("ok!")
    }
    console.log("deu erro! Calculado: " + calculeted + " / Esperado: " + expect);
}
//caso positivo
testEncode(encode(1, "abc"), "bcd");
testEncode(encode(25, "abc"), "zab");
testEncode(encode(11, "Rei Babar"), "Cpt Mlmlc");

//caso negativo
testEncode(encode(-1, "abc", "zyz"));

function testDecode(calculeted, expect) {
if (calculeted === expect) {
    console.log("Ok!")
}
console.log("Erro na decifragem! Calculado: " + calculeted + " / Esperado: " +expect);
}

testDecode(decode(1,"bcd"),"abc");