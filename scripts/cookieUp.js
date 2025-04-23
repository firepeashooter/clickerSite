
let cookies = 0;
let clickMultiplier = 1;
let clickUpgrade = true

function cookieUp(clickMultiplier){
    
    cookies += (1 * clickMultiplier);
    document.getElementById('counter').innerHTML = cookies;
    
}

//When we buy the upgrade, we want it to go away or get greyed out, and then permanently increase our clickMultiplier

function upgradeClick(){
    //Multiply the click power by 2 and then replace the current picture with a new one\

    console.log('upgraded click');

    if (clickUpgrade){
        clickMultiplier *= 2;
        document.getElementById("upgrade1").src = "images/cancel.jpg";
        clickUpgrade = false;
    }
    
}