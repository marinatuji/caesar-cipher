//pensar nos testes da sua aplicação javascript
function test(calculeted, expect){
    if(calculeted === expect){
        console.log("ok!")
    }
    console.log("deu erro! Para resultado:" + calculeted);
}

test(encode(1,"abc"),"bcd");
test(encode(26,"abc"),"zab");
test(encode(11,"Rei Babar"),"Cpt Mlmlc");
test(encode(-1,"abc","zyz"));