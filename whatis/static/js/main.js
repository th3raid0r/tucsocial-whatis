let speechSynthesis = window.speechSynthesis;
let speechUtterance = null;

function toggleSpeech() {
    const button = document.getElementById('speechButton');
    
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        button.textContent = 'Read Aloud';
    } else {
        const content = document.getElementById('content').textContent;
        speechUtterance = new SpeechSynthesisUtterance(content);
        
        speechUtterance.onend = function() {
            button.textContent = 'Read Aloud';
        };
        
        speechSynthesis.speak(speechUtterance);
        button.textContent = 'Stop Reading';
    }
}

// Ensure speech is canceled when leaving the page
window.onbeforeunload = function() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
};

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function toggleFont() {
    document.body.classList.toggle('dyslexic-font');
}