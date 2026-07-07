function changeText() {

    const textsArray = [
        "Welcome to SIT725",
        "Applied Software Engineering",
        "Learning JavaScript",
        "Using Git and GitHub",
        "Hello Deakin!"
    ];

    const number = getRandomNumberBetween(0, textsArray.length - 1);

    console.log("Selected Index:", number);

    document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}