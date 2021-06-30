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

turnLeft(rover);
turnLeft(rover);
turnLeft(rover);


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