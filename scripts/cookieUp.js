
let cookies = 0;
let clickMultiplier = 1;
let clickUpgrade = true;
let clicks = 0


function cookieUp(clickMultiplier){

    cookie_image = document.getElementById('cookie');
    
    //Interactive Cookie!
    cookie_image.style.transform = "scale(1.1)";
    setTimeout(cookieNormal, 10)

    
    //Increases the cookie counter from clicking
    cookies += (1 * clickMultiplier);
    //Keeping tracks of clicks for the stats page
    clicks += 1;
    allTimeCookies += 1;
    document.getElementById('counter').innerHTML = numberFormatter(cookies);
    document.getElementById('clicks').innerHTML = numberFormatter(clicks);
    document.getElementById('allTimeCookies').innerHTML = numberFormatter(allTimeCookies);
    
}

//Function for scaling up the cookie
function cookieBig(){
    cookie_image = document.getElementById('cookie');

    cookie_image.style.transform = "scale(1.1)";
    setTimeout(cookieNormal, 100)
}

//Function for making the cookie the original size again
function cookieNormal(){
    cookie_image = document.getElementById('cookie');
    cookie_image.style.transform = "scale(1)";
}




//When we buy the upgrade, we want it to go away or get greyed out, and then permanently increase our clickMultiplier

function upgradeClick(){
    //Multiply the click power by 2 and then replace the current picture with a new one\

    if(!(clickUpgrade)){
        console.log('Already made this purchase')

    }else if (cookies >= 100){
        clickMultiplier *= 2;
        cookies -= 100;
        clickUpgrade = false;
        document.getElementById('upgrade1').src = "images/checkbox.avif";

    }else{
        console.log("You do not have enough cookies to make this purchase");
    }
    
}


