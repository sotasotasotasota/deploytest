function copyToClipboard(selector) {
    const codeElement = document.querySelector(selector);
    const codeText = codeElement.textContent;

    const textArea = document.createElement('textarea');
    textArea.value = codeText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    alert('コードをコピーしました: \n' + codeText);
}
