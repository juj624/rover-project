


var rover = {
    x: 0,
    y: 0,
    direction: "N",
    travelLog: [0, 0]
}
console.log(rover.direction)

var grid = [
    ["N", " ", "", " ", " ", " ", " ", " ", " ", " "],
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
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
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
            grid[rover.x][rover.y] = rover.direction;
            break;
        case "W":
            rover.direction = "N";
            grid[rover.x][rover.y] = rover.direction;
            break;
        case "S":
            rover.direction = "W";
            grid[rover.x][rover.y] = rover.direction;
            break;
        case "E":
            rover.direction = "S";
            grid[rover.x][rover.y] = rover.direction;
            break;
    }

}

// turnRight(rover);


function moveForward(rover) {
    console.log("moveForward was called");
    switch (rover.direction) {

        case "N":
            if (rover.y === 0) {
                console.log("you are out");
            } else {
                rover.y = rover.y - 1;
                grid[rover.x][rover.y] = rover.direction;
                travelLog.push([rover.x, rover.y]);
            }
            break;

        case "S":
            if (rover.y === 9) {
                console.log("you are out");
            } else {
                rover.y = rover.y + 1;
                grid[rover.y][rover.x] = rover.direction;
                rover.travelLog.push([rover.x, rover.y]);
            }
            break;

        case "W":
            if (rover.x === 0) {
                console.log("you are out");
            } else {
                rover.x = rover.x - 1;
                grid[rover.y][rover.x] = rover.direction;
                rover.travelLog.push([rover.x, rover.y]);
            }
            break;
        case "E":
            if (rover.x === 9) {
                console.log("you are out")
            } else {
                rover.x = rover.x + 1;
                grid[rover.y][rover.x] = rover.direction;
                rover.travelLog.push([rover.x, rover.y]);
            }
            break;
    }
    console.log(rover);
    // return grid[rover.y][rover.x]
}

// moveForward(rover);



function pilotRover(string) {


    switch (string) {

        case "f":
            moveForward(rover);
            console.table(grid)
            break;

        case "r":
            turnRight(rover);
            console.table(grid)

            break;
        // 
        case "l":
            turnLeft(rover);
            console.table(grid)

            break;

        default:
            console.log("Only this commands are possible: l, r or f");
            break;

    }

};

var prompt = require("prompt");
prompt.start();

console.table(grid)


function roverProject() {
    prompt.get({
        letter: "player",
        description: "what direction do you want ?"
    }, function (err, res) {
        string = res.player;
        pilotRover(string);
    })

}
roverProject()