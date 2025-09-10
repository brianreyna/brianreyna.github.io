function makeTestBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function fancyStyle() {
    const textArea = document.getElementById("userText");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
    textArea.style.fontStyle = "";
}

function boringStyle() {
    const textArea = document.getElementById("userText");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "";
    textArea.style.textDecoration = "";
    textArea.style.fontStyle = "";
}

function mooFunc() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
    
    let sentences = text.split(/(?<=\.)( |$)/);
    
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim() === '') continue;
        if (sentences[i].includes('.')) {
            sentences[i] = sentences[i].replace(/\.\s*$/, '-Moo.');
        }
    }
    
    textArea.value = sentences.join('').trim();
}
