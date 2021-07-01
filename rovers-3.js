

var rover = {
    x: 0,
    y: 0,
    direction: "N",
    travelLog: [0, 0]
}


var grid = [
    [" ", " ", "", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", "", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", "", " ", " ", " ", " "],
    [" ", " ", " ", " ", "", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", "", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", "", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", "", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", "", " ", " ", " ", " ", " ", " "]
];

function turnLeft(rover) {
    console.log("turnLeft was called!");
    switch ((rover).direction) {
        case "N":
            (rover).direction = "S";
            break;
        case "W":
            (rover).direction = "S";
            break;
        case "S":
            (rover).direction = "E";
            break;
        case "E":
            (rover).direction = "N";
            break;
        default:
    }
    console.log(`Rover Direction: ${(rover).direction}`)
}

// turnLeft(rover);
// turnLeft(rover);
// turnLeft(rover);


function turnRight(rover) {
    console.log("turnRight was called!");
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "W":
            rover.direction = "N";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "E":
            rover.direction = "S";
            break;
    }
    console.log(`Rover Direction: ${rover.direction}`)
}

// turnRight(rover);


function moveForward(rover) {
    console.log("moveForward was called");
    switch (rover.direction) {

        case rover.direction = "N":
            if (rover.y === 0) {
                console.log("you are out");
            } else {
                rover.y = rover.y - 1;
            }
            break;

        case rover.direction = "S":
            if (rover.y === 9) {
                console.log("you are out");
            } else {
                rover.y = rover.y + 1;
            }
            break;

        case rover.direction = "W":
            if (rover.x === 0) {
                console.log("you are out");
            } else {
                rover.x = rover.x - 1;
            }
            break;
        case rover.direction = "E":
            if (rover.x === 9) {
                console.log("you are out")
            } else {
                rover.x = rover.x + 1;
            }
            break;
    }
    console.log(rover);
}

// moveForward(rover);



function pilotRover(rover) {
    var listOfCommands = ["r", "f", "l"];

    for (var i = 0; i <= listOfCommands.length; i++) {
        switch (rover === listOfCommands[i]) {

            case "f":
                moveForward(rover);
                console.log(moveForward(rover))
                break;

            case "r":
                turnRight(rover);
                console.log(turnRight(rover))

                break;

            case "l":
                turnLeft(rover);
                console.log(turnLeft(rover))

                break;

            default:
                console.log("Only this commands are possible: l, r or f");
                break;
        }
    }

};
// pilotRover("r");
// pilotRover("l");
pilotRover("f");
