


var rover = {
    x: 0,
    y: 0,
    direction: "N",
    travelLog: [0, 0]
}
console.log(rover.direction)

var grid = [
    ["N"," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
   
];

function turnLeft(rover) {
    console.log("turnLeft was called!");
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "W":
            rover.direction = "S";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "S":
            rover.direction = "E";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "E":
            rover.direction = "N";
            grid[rover.y][rover.x] = rover.direction;
            break;
        default:
    }
}

// turnLeft(rover);
// turnLeft(rover);
// turnLeft(rover);


function turnRight(rover) {
    console.log(`turnRight was called!`, rover);
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "W":
            rover.direction = "N";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "S":
            rover.direction = "W";
            grid[rover.y][rover.x]= rover.direction;
            break;
        case "E":
            rover.direction = "S";
            grid[rover.y][rover.x] = rover.direction;
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
                console.log(`cas N y:${rover.y}; x:${rover.x}`)
                grid[rover.x][rover.y] = rover.direction;
                rover.travelLog.push([rover.x, rover.y]);
            }
            break;

        case "S":
            if (rover.y === 9) {
                console.log("you are out");
            } else {
                rover.y = rover.y + 1;
                console.log(`cas s y:${rover.y}; x:${rover.x}`)
                grid[rover.y][rover.x] = rover.direction;
                rover.travelLog.push([rover.x, rover.y]);
            }
            break;

        case "W":
            if (rover.x === 0) {
                console.log("you are out");
            } else {
                rover.x = rover.x - 1;
                console.log(`cas w y:${rover.y}; x:${rover.x}`)
                grid[rover.y][rover.x] = rover.direction;
                rover.travelLog.push([rover.x, rover.y]);
            }
            break;
        case "E":
            if (rover.x === 9) {
                console.log("you are out")
            } else {
                rover.x = rover.x + 1;
                console.log(`cas E y:${rover.y}; x:${rover.x}`)
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
        name: "player",
        description: "what direction do you want ?"
    }, function (err, res) {
        string = res.player;
        pilotRover(string);

        roverProject()
    })

}
roverProject()