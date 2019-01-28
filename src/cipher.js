/* não usar window
*/

function encode(form) {
    let offset = parseInt(form.kcipher.value);
    let msgCipher = form.mcipher.value.toUpperCase();
    let encodedMsg = [];

    for (i = 0; i < msgCipher.length; i++) {
        let indexAsc = msgCipher.charCodeAt(i);
        let offsetIndex = ((indexAsc - 65 + offset) % 26) + 65;
        encodedMsg.push(String.fromCharCode(offsetIndex));
    }
    alert(encodedMsg.join(""));
}

function decode(form) {
 let offset = parseInt(form.kdecipher.value);
 let msgDecipher = form.mdecipher.value.toUpperCase();
 let decodedMsg = [];

 for(i = 0; i < msgDecipher.length; i++) {
    let indexAsc = msgDecipher.charCodeAt(i);
    let originalIndex = ((indexAsc - 65 - (((offset % 26) + 26)) %26)) + 65;
    decodedMsg.push(String.fromCharCode(originalIndex));

}
alert(decodedMsg.join(""));
} 