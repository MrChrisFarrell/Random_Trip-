let destinations = ["Tokyo", "Denver", "San Diego", "Paris", "Miami", "Italy"];
let restaurants = ["Italian", "Seafood", "American", "Mexican", "Korean", "Japanese"];
let transportation = ["Car", "Moped", "Bus", "Bike", "SUV", "Truck", "Taxi"];
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
    return trip;
}
// || choice !== "NO" || choice !== "yes" || choice !== "Yes" || choice !== "YES"
// program starts here

let tripArray = tripGenerator(destinations, restaurants, transportation, entertainment);
let confirmationMessage = "You are going to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". You will be travelling by " + tripArray[2] + " to enjoy a " + tripArray[3] + "! Press OK to accept or Cancel to change.";

let choice = confirm(confirmationMessage);

let changeMessage = "What would you like to change? \[Enter \"1\" to change " + tripArray[0] + "\] \[Enter \"2\" to change " + tripArray[1] + "\] \[Enter \"3\" to change " + tripArray[2] + "\] \[Enter \"4\" to change " + tripArray[0] + "\]";

while(choice === false){
    let reroll = prompt(changeMessage);
    if(reroll == "1"){
        tripArray[0] = randomPicker(destinations);
        confirmationMessage = "You are going to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". You will be travelling by " + tripArray[2] + " to enjoy a " + tripArray[3] + "! Is this good? Type \"yes\" or \"no\".";
        choice = confirm(confirmationMessage);
    }else if(reroll == "2"){
        tripArray[1] = randomPicker(restaurants);
        confirmationMessage = "You are going to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". You will be travelling by " + tripArray[2] + " to enjoy a " + tripArray[3] + "! Is this good? Type \"yes\" or \"no\".";
        choice = confirm(confirmationMessage);
    }else if(reroll == "3"){
        tripArray[2] = randomPicker(transportation);
        confirmationMessage = "You are going to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". You will be travelling by " + tripArray[2] + " to enjoy a " + tripArray[3] + "! Is this good? Type \"yes\" or \"no\".";
        choice = confirm(confirmationMessage);
    }else if(reroll == "4"){
        tripArray[3] = randomPicker(entertainment);
        confirmationMessage = "You are going to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". You will be travelling by " + tripArray[2] + " to enjoy a " + tripArray[3] + "! Is this good? Type \"yes\" or \"no\".";
        choice = confirm(confirmationMessage);
    }else{
        alert("Invalid Selection");
    }
}
let enjoyTripMessage = "Enjoy your trip to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". Be safe while travelling by " + tripArray[2] + ", and remember to enjoy the " + tripArray[3] + "!";
alert(enjoyTripMessage);
