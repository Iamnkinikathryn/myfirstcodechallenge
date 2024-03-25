// check grade function checks the input received and gives out the desired grade
const checkGrade = () => {
    // Prompt user to input the marks he/she received
    const answer = prompt("Enter marks between 0 and 100")
    // Convert format of number from string to integer for comparison
    const num = Number(answer)

    if(!Boolean(num)) {
        console.log("Invalid input choice. Please select between 0 and 100")
        window.location.reload()
        return
    } else {
        if (num > 79) {
            // Output grade on console.log
            console.log("Grade A")
            // Reload window to receive next input
            window.location.reload()
        } else if (num > 60 && num <= 79) {
            // Output grade on console.log
            console.log("Grade B")
            // Reload window to receive next input
            window.location.reload()
        } else if(num > 49 && num <= 59) {
            // Output grade on console.log
            console.log("Grade C")
            // Reload window to receive next input
            window.location.reload()
        } else if(num > 40 && num <= 49) {
            // Output grade on console.log
            console.log("Grade D")
            // Reload window to receive next input
            window.location.reload()
        } else if( num < 40) {
            // Output grade on console.log
            console.log("Grade E")
            // Reload window to receive next input
            window.location.reload()
        }
    }

}
checkGrade()