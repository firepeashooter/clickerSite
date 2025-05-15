

//Starts ProgressBar
progressIntervalID = setInterval(progressBarHandler, 1000)

//We want this function to calculate a percentage based off cookies / 1 trillion 
//Then we want it to update the progress bar's length by that percentage

function progressBarHandler() {
    
    
    let percentComplete = (cookies / 1000 * 100).toFixed(0)
    document.getElementById('progress').style.width = `${percentComplete}%`


    if (percentComplete >= 100){
        clearInterval(progressIntervalID)
        console.log('You won the game!')
    }
    
}


