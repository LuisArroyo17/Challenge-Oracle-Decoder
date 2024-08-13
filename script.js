function encrypt() {
    let text = document.getElementById("inputText").value;

    if (/[^a-z\s]/.test(text)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("outputText").innerText = encryptedText;

    if (encryptedText) {
        document.getElementById("copyButton").style.display = "inline-block";
    }
}

function decrypt() {
    let text = document.getElementById("inputText").value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("outputText").innerText = decryptedText;
    
    if (decryptedText) {
        document.getElementById("copyButton").style.display = "inline-block";
    } else {
        document.getElementById("copyButton").style.display = "none";
    }
}

function copyText() {
    let text = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
