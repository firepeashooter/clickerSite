
let cookies = 0;
let clickMultiplier = 1;
let clickUpgrade = true

function cookieUp(clickMultiplier){

    cookie_image = document.getElementById('cookie');

    //Interactive Cookie!
    cookie_image.style.transform = "scale(1.1)";
    setTimeout(cookieNormal, 10)
    
    //Increases the cookie counter from clicking
    cookies += (1 * clickMultiplier);
    document.getElementById('counter').innerHTML = numberFormatter(cookies);
    
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

    console.log('upgraded click');

    if (clickUpgrade){
        clickMultiplier *= 2;
        //In this case we just switch the image to signify that it's been created
        document.getElementById("upgrade1").src = "images/checkbox.avif";
        clickUpgrade = false;
    }
    
}