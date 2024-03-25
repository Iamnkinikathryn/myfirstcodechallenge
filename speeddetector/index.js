// speedDetector function checks the speed and outputs message as requested
const speedDetector = () => {
    // set the minimum speed and save in variable
    let minimumSpeed = 70
    // get the speed the vehicle is running
    let speed = Number(prompt("Enter speed: "))
    // Check if input has a valid input/number
    if (!Boolean(speed)) {
        console.log("invlaid input choice. Please choose a number")
        window.location.reload()
        return
    } else {
   // compare if speed exceed or is less than the required minimum speed
    if (speed < minimumSpeed) {
        // print out OK message if speed is less than minimum speed
        console.log("Ok")
    } else {
        // Calculate speedpoints by subtracting the minimum speed from the actual speed and dividing the result by 5
        let speedPoints = speed - minimumSpeed
        speedPoints = speedPoints / 5
        if(speedPoints > 12) {
            // Print out license expired if speedPoints exceed 12
            console.log("License Suspended")
        } else {
            // Print out speedpoints
            console.log(`Points: ${speedPoints}`)
        }
}
    }

}
speedDetector()