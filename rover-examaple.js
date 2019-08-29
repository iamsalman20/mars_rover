var readLine = require ('readline')
var rl = readLine.createInterface({
    input:process.stdin,
    output: process.stdout
})
var in_nr = 1
var roverInstance = require ('./Rover')
var myRover
var new_rover_pos
rl.setPrompt("Enter 'quit' to exit the process\n")
rl.prompt()

rl.on('line', function(enteredData) {
    if(enteredData === 'quit'){
        process.exit(1)
    } else if(in_nr === 1){
        var topCoordinates = enteredData.split(" ")
        myRover = new roverInstance(topCoordinates[0], topCoordinates[1])
        in_nr++

    } else if (in_nr % 2 === 0) {
        var roverPos = enteredData.split(" ")
        myRover.setRoverPosition(roverPos[0], roverPos[1], roverPos[2])
        in_nr++

    } else {
        myRover.roverInstructionsManager(enteredData)
        new_rover_pos = myRover.getRoverPosition()
        console.log("New Rover position: ", new_rover_pos)
        in_nr++
    }
})