//pensar nos testes da sua aplicação javascript
function test(calculeted, expect){
    if(calculeted === expect){
        console.log("ok!")
    }
    console.log("deu erro! Calculado: " + calculeted + " / Esperado :" + expect);
}
//caso positivo
test(encode(1,"abc"),"bcd");
test(encode(25,"abc"),"zab");
test(encode(11,"Rei Babar"),"Cpt Mlmlc");

//caso negativo
test(encode(-1,"abc","zyz"));