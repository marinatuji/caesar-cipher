function buildMsgCipher(form) {
    let offset = parseInt(form.kcipher.value);
    let string = form.mcipher.value;
    document.getElementById("show-msg").innerHTML = encode(offset, string);
}

function buildMsgDecipher(form) {
    let offset = parseInt(form.kcipher.value);
    let string = form.mcipher.value;
    document.getElementById("show-msg").innerHTML = decode(offset, string);
}

function encode(offset, string) {
    let msgEncoded = "";
    for (i = 0; i < string.length; i++) {
        let indexAsc = string.charCodeAt(i);
        if (indexAsc >= 65 && indexAsc <= 90) {
            let offsetIndex = ((indexAsc - 65 + offset) % 26) + 65;
            msgEncoded += String.fromCharCode(offsetIndex);
        } else if (indexAsc >= 97 && indexAsc <= 122) {
            let offsetIndex = ((indexAsc - 97 + offset) % 26) + 97;
            msgEncoded += String.fromCharCode(offsetIndex);
        } else {
            msgEncoded += String.fromCharCode(indexAsc);
        }
    }
    return msgEncoded;
}

function decode(offset, string) {
    let msgDecoded = "";

    for (i = 0; i < string.length; i++) {
        let indexAsc = string.charCodeAt(i);
        if (indexAsc >= 65 && indexAsc <= 90) {
            let offsetIndex = ((indexAsc - 65 - (((offset % 26) + 26)) % 26)) + 65; //funcao da Ma
            msgDecoded += String.fromCharCode(offsetIndex);
        } else if (indexAsc >= 97 && indexAsc <= 122) {
            let offsetIndex = ((indexAsc - 97 - (((offset % 26) + 26)) % 26)) + 97;
            msgDecoded += String.fromCharCode(offsetIndex);
        } else {
            msgDecoded += String.fromCharCode(indexAsc);
        }
    }
    return msgDecoded;
}