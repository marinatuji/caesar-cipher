function buildMessage(event, form) {
    event.preventDefault();
    let offset = parseInt(form.inputKey.value);
    let string = form.inputMessage.value;
    let resultMessage = form.radioCipher.value === "Cifrar" ? encode(offset, string) : decode(offset, string);
    document.getElementById("show-message").innerHTML = resultMessage;
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
            let offsetIndex = (indexAsc - 65 - (offset % 26) + 26) % 26 + 65; //funcao da Ma
            msgDecoded += String.fromCharCode(offsetIndex);
        } else if (indexAsc >= 97 && indexAsc <= 122) {
            let offsetIndex = (indexAsc - 97 - (offset % 26) + 26) % 26 + 97;
            msgDecoded += String.fromCharCode(offsetIndex);
        } else {
            msgDecoded += String.fromCharCode(indexAsc);
        }
    }
    return msgDecoded;
}