function openPopup() {
    document.getElementById('girlPopup').style.display = 'block';
    
    var speechText = "Hello! Welcome to our website.";
    var utterance = new SpeechSynthesisUtterance(speechText);
    speechSynthesis.speak(utterance);
}
