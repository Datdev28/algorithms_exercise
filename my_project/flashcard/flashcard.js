let isFlipped = false;

function flipCard() {
    const flashcard = document.querySelector('.flashcard');
    if (!isFlipped) {
        flashcard.style.transform = 'rotateY(180deg)';
    } else {
        flashcard.style.transform = 'rotateY(0deg)';
    }
    isFlipped = !isFlipped;
}

function nextCard() {
    flipCard(); 
}