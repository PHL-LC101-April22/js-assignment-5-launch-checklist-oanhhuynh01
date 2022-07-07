// Write your helper functions here!
require('isomorphic-fetch');

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
    let validationReturn;
    if (testInput == ""){
        validationReturn = "Empty";
    }
    if (isNaN(testInput)){
        validationReturn == "Is a Number";
    }
    if (isNaN(testInput) == false){
        validationReturn == "Not a Number";
    }
    return validationReturn;
   
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
   let form = document.querySelector("testForm");
   form.addEventListener("Submit", function(event){
        if (pilot === "" || copilot === "" || fuelLevel === "" || cargoMass === ""){
            alert("All fields are required!");
            event.preventDefault();
        }
        if (fuelLevel < 10000){
            let faultyItems = document.getElementByID("faultyItems");
            faultyItems.styles.visibility = "visible";
            document.getElementByID("fuelStatus").innerHTML = 'Not Enough fuel for the journey';
            document.getElementByID("launchStatus").innerHTML = 'Shuttle not ready for launch';
            document.getElementByID("launchStatus").styles.color = "red";
        }
        document.getElementByID("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementByID("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

   });
   
  
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
