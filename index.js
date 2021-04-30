let destinations = ["Tokyo", "Denver", "San Diego", "Paris", "Miami", "Italy"];
let restaurants = ["Italian", "Seafood", "American", "Mexican", "Korean", "Japanese"];
let transportation = ["Car", "Moped", "Public", "Bike", "SUV", "Truck", "Taxi"];
let entertainment = ["Concert", "Hike", "Casino", "Relaxing massage", "Run with the bulls"];

function randomPicker(array){
    let numberOfArray = array.length;
    let random = Math.floor(Math.random() * numberOfArray);
    let pick = array[random];

    return pick;
}
function tripGenerator(destArray, restArray, transArray, entArray){
    let trip = [];
    trip[0] = randomPicker(destArray);
    trip[1] = randomPicker(restArray);
    trip[2] = randomPicker(transArray);
    trip[3] = randomPicker(entArray);
    let choose = prompt("You are going to " + trip[0] + ", where you will eat " + trip[1] + ". You will be travelling by " + trip[2] + " to enjoy a " + trip[3] + "! Is this good? Type \"yes\" or \"no\".");
    return choose;
}
let choice = tripGenerator(destinations, restaurants, transportation, entertainment);
console.log(choice);