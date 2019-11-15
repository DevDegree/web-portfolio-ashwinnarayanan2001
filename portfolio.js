const pageID = ["landing", "intro", "leadership", "hostevents", "personal", "foot"];

let currentIndex = 0

const upButton = document.getElementById("up");
const downButton = document.getElementById("down");

upButton.addEventListener('click', () => {

    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 0;
    }

    document.getElementById(pageID[currentIndex]).scrollIntoView();
});

downButton.addEventListener('click', () => {
    currentIndex += 1;

    if (currentIndex > pageID.length) {
        currentIndex = pageID.length - 1;
    }

    document.getElementById(pageID[currentIndex]).scrollIntoView();
});