let destinations = ["Tokyo", "Denver", "San Diego", "Paris", "Miami", "Italy"];
let restaurants = ["Italian", "Seafood", "American", "Mexican", "Korean", "Japanese"];
let transportation = ["Car", "Moped", "Public", "Bike", "SUV", "Truck", "Taxi"];
let entertainment = ["Concert", "Hike", "Casino", "Relaxing massage", "Run with the bulls"];

function randomDest(places){
    let numberOfPlaces = places.length;
    let random = Math.floor(Math.random() * numberOfPlaces);
    let destPick = places[random];
    return destPick;
}
let attempt = randomDest(destinations);
console.log(attempt);