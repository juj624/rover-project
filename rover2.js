

const prompt = require("prompt");

prompt.start();

let rover = {
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

function roverProject(rover) {
    prompt.get({ direction: "player", description: "Quel est la direction ?" }, function (err, res) {

        

        //turnRight(rover);
        //turnRight(rover);
        //turnRight(rover);

        function moveForward(rover) {
            console.log("moveForward was called");
            switch (rover.direction) {

                case rover.direction = "N":
                    if (rover.y === 0) {
                        console.log("You can't place Rover outside of the board!");
                        console.log(`Rover current position is ${rover.x},${rover.y}`);
                    }
                    else if (grid[rover.y - 1] != " ") {
                        //report the  as found
                        console.log("Rover can crash with an ! STOP!");
                        console.log(`Rover current position is ${rover.x},${rover.y}`);
                    }
                    else if (rover.y == rover2.y && rover.x == rover2.x) {

                    }
                    else {
                        rover.y--;
                        rover["travelLog"].push([rover.x, rover.y]);
                        console.log(`The last positions of the Rover are: ${rover.travelLog}`);
                        console.log(`Rover current position is ${rover.x},${rover.y}`);
                    }
                    break;
                case rover.direction = "S":
                    if (rover.y === 9) {
                        console.log("You can't place Rover outside of the board!");
                        console.log(`Rover current position is ${rover.x}${rover.y}`);
                    }
                    else if (grid[rover.y + 1] != " ") {
                        console.log("Rover can crash with an ! STOP!");
                        console.log(`Rover current position is ${rover.x},${rover.y}`);
                    }
                    else {
                        rover.y++;
                        rover["travelLog"].push([rover.x, rover.y]);
                        console.log(`The last positions of the Rover are: ${rover.travelLog}`);
                        console.log(`Rover current position is ${rover.x},${rover.y}`);
                    }
                    break;

                case rover.direction = "W":
                    if (rover.x === 0) {
                        console.log("You can't place Rover outside of the board!");
                        console.log(`Rover current position is ${rover.x},${rover.y}`);
                    }
                    else if (grid[rover.x - 1] != " ") {
                        console.log("Rover can crash with an ! STOP!");
                        console.log(`Rover current position is ${rover.x},${rover.y}`);
                    }
                    else {
                        rover.x--;
                        rover["travelLog"].push([rover.x, rover.y]);
                        console.log(`The last positions of the Rover are: ${rover.travelLog}`);
                        console.log(`Rover current position is ${rover.x},${rover.y}`);
                    }
                    break;

                case rover.direction = "E":
                    if (rover.x === 0) {
                        console.log("You can't place Rover outside of the board!");
                        console.log(`Rover current position is ${rover.x},${rover.y}`);
                    }
                    else if (grid[rover.x + 1] != " ") {
                        console.log("Rover can crash with an ! STOP!");
                        console.log(`Rover current position is ${rover.x},${rover.y}`);
                    }
                    else {
                        rover.x++;
                        rover["travelLog"].push([rover.x, rover.y]);
                        console.log(`The last positions of the Rover are: ${rover.travelLog}`);
                        console.log(`Rover current position is ${rover.x},${rover.y}`);
                    }
                    break;
            }
        }

        //moveForward(rover);
        //moveForward(rover);
        //moveForward(rover);
        //moveForward(rover);

        function moveBackward(rover) {
            console.log("moveBackward was called");
            switch (rover.direction) {

                case rover.direction = "N":
                    if (rover.y === 9) {
                        console.log("You can't place Rover outside of the board!");
                        console.log(`Rover position is ${rover.x},${rover.y}`);
                    }
                    else {
                        rover.y++;
                        rover["travelLog"].push([rover.x, rover.y]);
                        console.log(`The last positions of the Rover are: ${rover.travelLog}`);
                        console.log(`Rover position is ${rover.x},${rover.y}`);
                    }
                    break;

                case rover.direction = "S":
                    if (rover.y === 0) {
                        console.log("You can't place Rover outside of the board!");
                        console.log(`Rover position is ${rover.x},${rover.y}`);
                    }
                    else {
                        rover.y--;
                        rover["travelLog"].push([rover.x, rover.y]);
                        console.log(`The last positions of the Rover are: ${rover.travelLog}`);
                        console.log(`Rover position is ${rover.x},${rover.y}`);
                    }
                    break;

                case rover.direction = "W":
                    if (rover.x === 9) {
                        console.log("You can't place Rover outside of the board!");
                        console.log(`Rover position is ${rover.x},${rover.y}`);
                    }
                    else {
                        rover.x++;
                        rover["travelLog"].push([rover.x, rover.y]);
                        console.log(`The last positions of the Rover are: ${rover.travelLog}`);
                        console.log(`Rover position is ${rover.x},${rover.y}`);
                    }
                    break;

                case rover.direction = "E":
                    if (rover.x === 9) {
                        console.log("You can't place Rover outside of the board!");
                        console.log(`Rover position is ${rover.x},${rover.y}`);
                    }
                    else {
                        rover.x--;
                        rover["travelLog"].push([rover.x, rover.y]);
                        console.log(`The last positions of the Rover are: ${rover.travelLog}`);
                        console.log(`Rover position is ${rover.x},${rover.y}`);
                    }
                    break;
            }
        }

        //moveBackward(rover);
        //moveBackward(rover);
        //moveBackward(rover);
        //moveBackward(rover);

        var listOfCommands = ["r", "f", "f", "r", "f", "f", "l", "f", "r", "f", "f"];

        
    });
};
roverProject(rover)
//commands(listOfCommands);

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

//turnLeft(rover);
//turnLeft(rover);
//turnLeft(rover);


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

function commands(listOfCommands) {
    for (var i = 0; i < listOfCommands.length; i++) {
        switch (listOfCommands[i]) {
            case "f":
                moveForward(rover);
                break;
            case "r":
                turnRight(rover);
                break;
            case "l":
                turnLeft(rover);
                break;
            case "b":
                moveBackward(rover);
                break;
            //Bonus3: Add validation so that the inputs must be f, b, r, or l
            default:
                console.log("Only this commands are possible: l, r, b or f");
                break;
        }
    }
}
