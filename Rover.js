class Rover {
    constructor (topX, topY){
        this.topX = topX
        this.topY = topY
        this.x = 0
        this.y = 0
        this.N = 1
        this.E = 2
        this.S = 3
        this.W = 4
        this.dir = this.N
    }
    setRoverPosition(x, y, direction){
        this.x = x
        this.y = y
        this.dir = this[direction]

    }
    roverInstructionsManager (instructions) {
        for (var i =0;i<instructions.length;i++){
            this.sendActionToRover(instructions.charAt(i))
        }

    }
    sendActionToRover(action) {
        switch (action) {
            case 'L':
                this.rotateLeft()
                break
            case 'R':
                this.rotateRight()
                break
            case 'M':
                this.moveAhead()
                break
            default:
                console.log("Unrecognised command....exiting process")
                process.exit(0)
                break
        }
    }
    rotateLeft () {
        this.dir = this.dir-1 === 0 ? this.W : this.dir-1

    }
    rotateRight () {
        this.dir = this.dir +1 === 5 ? this.N : this.dir+1

    }
    moveAhead () {
        switch (this.dir) {
            case 1:
                this.y++
                break
            case 2:
                this.x++
                break
            case 3:this.y--
                break
            case 4:
                this.x--
                break
            default:
                console.log("Booh...exit")
                process.exit(1)
                break
        }

    }
    getRoverPosition() {
        var direction
        switch(this.dir) {
            case 1:
                direction = 'N'
                break
            case 2:
                direction = 'E'
                break
            case 3:
                direction = 'S'
                break
            case 4:
                direction = 'W'
                break
            default:
                console.log("Something wrong happened")
                process.exit(1)
                break
        }
        return (this.x + " " + this.y + " " + direction)

    }
}
module.exports = Rover