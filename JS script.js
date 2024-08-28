
var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;


    var resultCripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

 
    atualizarOutput(resultCripto);
}


function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

    atualizarOutput(resultDescripto);
}

function atualizarOutput(texto) {
    outInput.innerHTML = '<textarea readonly class="textarea-output">' + texto + '</textarea>' +
                         '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.querySelector('.textarea-output');

    textoCop.select();
    textoCop.setSelectionRange(0, 99999);

    if (navigator.clipboard) {
        navigator.clipboard.writeText(textoCop.value)
            .then(() => {
                alert("Texto copiado para a área de transferência!");
            })
            .catch(err => {
                console.error("Erro ao copiar o texto: ", err);
            });
    } else {
        document.execCommand("copy");
        alert("Texto copiado para a área de transferência!");
    }
}
