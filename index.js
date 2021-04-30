let destinations = ["Tokyo", "Denver", "San Diego", "Paris", "Miami", "Italy"];
let restaurants = ["Italian", "Seafood", "American", "Mexican", "Korean", "Japanese"];
let transportation = ["Car", "Moped", "Public", "Bike", "SUV", "Truck", "Taxi"];
let entertainment = ["Concert", "Hike", "Casino", "Relaxing massage", "Run with the bulls"];

let changeMessage = "What would you like to change? \[Enter \"1\" to change Destination\] \[Enter \"2\" to change Restaurant\] \[Enter \"3\" to change Transportation\] \[Enter \"4\" to change Entertainment\]";


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
let confirmationMessage = "You are going to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". You will be travelling by " + tripArray[2] + " to enjoy a " + tripArray[3] + "! Is this good? Type \"yes\" or \"no\".";

let choice = prompt(confirmationMessage);

while(choice !== "no" || choice !== "No" || choice !== "NO"){  // loop won't recognize correct inputs
    alert("Invalid Selection");
    choice = prompt(confirmationMessage);
}

while(choice === "no" || choice === "No" || choice === "NO"){
    let reroll = prompt(changeMessage);
    if(reroll == "1"){
        tripArray[0] = randomPicker(destinations);
        confirmationMessage = "You are going to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". You will be travelling by " + tripArray[2] + " to enjoy a " + tripArray[3] + "! Is this good? Type \"yes\" or \"no\".";
        choice = prompt(confirmationMessage);
    }else if(reroll == "2"){
        tripArray[1] = randomPicker(restaurants);
        confirmationMessage = "You are going to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". You will be travelling by " + tripArray[2] + " to enjoy a " + tripArray[3] + "! Is this good? Type \"yes\" or \"no\".";
        choice = prompt(confirmationMessage);
    }else if(reroll == "3"){
        tripArray[2] = randomPicker(transportation);
        confirmationMessage = "You are going to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". You will be travelling by " + tripArray[2] + " to enjoy a " + tripArray[3] + "! Is this good? Type \"yes\" or \"no\".";
        choice = prompt(confirmationMessage);
    }else if(reroll == "4"){
        tripArray[3] = randomPicker(entertainment);
        confirmationMessage = "You are going to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". You will be travelling by " + tripArray[2] + " to enjoy a " + tripArray[3] + "! Is this good? Type \"yes\" or \"no\".";
        choice = prompt(confirmationMessage);
    }else{
        alert("Invalid Selection");
    }
}
if(choice === "yes" || choice === "Yes" || choice === "YES"){
    let enjoyTripMessage = "Enjoy your trip to " + tripArray[0] + ", where you will eat " + tripArray[1] + ". Be safe while travelling by " + tripArray[2] + ", and remember to enjoy the " + tripArray[3] + "!";
    alert(enjoyTripMessage);
}