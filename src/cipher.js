function buildMessage(event, form) {
    event.preventDefault();
    let offset = parseInt(form.inputKey.value);
    let string = form.inputMessage.value;
    let resultMessage = form.radioCipher.value === "Cifrar" ? encode(offset, string) : decode(offset, string);
    document.getElementById("show-message").innerHTML = resultMessage;
}

function encode(offset, string) {
    if (offset < 0) {
        return decode(-offset, string);
    }
    let encodedMessage = "";
    for (i = 0; i < string.length; i++) {
        let indexAsc = string.charCodeAt(i);
        if (indexAsc >= 65 && indexAsc <= 90) {
            let offsetIndex = ((indexAsc - 65 + offset) % 26) + 65;
            encodedMessage += String.fromCharCode(offsetIndex);
        } else if (indexAsc >= 97 && indexAsc <= 122) {
            let offsetIndex = ((indexAsc - 97 + offset) % 26) + 97;
            encodedMessage += String.fromCharCode(offsetIndex);
        } else {
            encodedMessage += String.fromCharCode(indexAsc);
        }
    }
    return encodedMessage;
}

function decode(offset, string) {
    let decodedMessage = "";
    for (i = 0; i < string.length; i++) {
        let indexAsc = string.charCodeAt(i);
        if (indexAsc >= 65 && indexAsc <= 90) {
            let offsetIndex = (indexAsc - 65 - (offset % 26) + 26) % 26 + 65; //funcao da Ma
            decodedMessage += String.fromCharCode(offsetIndex);
        } else if (indexAsc >= 97 && indexAsc <= 122) {
            let offsetIndex = (indexAsc - 97 - (offset % 26) + 26) % 26 + 97;
            decodedMessage += String.fromCharCode(offsetIndex);
        } else {
            decodedMessage += String.fromCharCode(indexAsc);
        }
    }
    return decodedMessage;
}