function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function toggleFont() {
    document.body.classList.toggle('dyslexic-font');
}

function speakContent() {
    const content = document.getElementById('content').textContent;
    const utterance = new SpeechSynthesisUtterance(content);
    window.speechSynthesis.speak(utterance);
}