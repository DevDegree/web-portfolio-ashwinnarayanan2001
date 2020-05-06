// An array that keeps track of all the sections of the website
const pageID = ['landing', 'intro', 'leadership', 'hostevents', 'personal', "foot"];

// Keeps track of current index and gets the up and down buttons
let currentIndex = 0
const upButton = document.getElementById("up");
const downButton = document.getElementById("down");

// If the up button is clicked, it goes up a section
upButton.addEventListener('click', () => {

    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 0;
    }

    document.getElementById(pageID[currentIndex]).scrollIntoView();
});

// If the down button is clicked, it goes down a section
downButton.addEventListener('click', () => {
    currentIndex += 1;

    if (currentIndex > pageID.length) {
        currentIndex = pageID.length - 1;
    }

    document.getElementById(pageID[currentIndex]).scrollIntoView();
});

// When the button is clicked in the footer, it displays the time the project was last updated
let lastUpdated = () => {
    let time = new Date(document.lastModified);
    document.getElementById("lastUpdatedText").innerHTML = time;
}