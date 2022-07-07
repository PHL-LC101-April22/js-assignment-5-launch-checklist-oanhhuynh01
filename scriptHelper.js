// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === "" || testInput === null){
     return 'Empty';
    } 
    else if(isNaN(testInput) === "false") {
     return 'Is a Number';
    } 
    else if (isNaN(Number(testInput))) {
     return 'Not a Number';}
 }


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
   
    if(validateInput(pilot) === 'Is a Number' ) {
        alert("Invalid Pilot Name");
    } 
    else if(validateInput(copilot) === 'Is a Number'){
        alert("Invalid Co-pilot Name");
    }
    else if(validateInput(fuelLevel) === 'Not a Number' ) {
        alert("Invalid Fuel input");
    }
    else if(validateInput(cargoLevel) === 'Not a Number'){
        alert("Invalid Cargo input");
    }
    
    else {
        pilotStatus.innerHTML = `Pilot: ${pilot.value}`;
        copilotStatus.innerHTML = `Co-pilot: ${copilot.value}`
        fuelStatus.innerHTML = `Fuel: ${fuelStatus.value}`
        cargoStatus.innerHTML = `Cargo: ${cargoStatus.value}`
        list.style.visibility = "hidden";
    }

    if (fuelLevel.value < 10000){
            fuelStatus.innerHTML =  "Not enough fuel for the journey";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is not ready for launch";
            launchStatus.style.color = "red";
    } 
    else if (cargoLevel.value > 10000){
            cargoStatus.innerHTML =  "Cargo is too heavy to takeoff!";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is not ready for launch";
            launchStatus.style.color = "red";
    } 
    else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Enough fuel for the journey";
        cargoStatus.innerHTML = "Cargo weight is safe to takeoff";
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    }

   };
   


 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();});
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
     let planet = planets[Math.floor(Math.random()*planets.length)];
 
     return planet;
 }




module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
