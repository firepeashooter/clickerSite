
let cookies = 0;
let clickMultiplier = 1;

function cookieUp(clickMultiplier){
    
    cookies += (1 * clickMultiplier);
    document.getElementById('counter').innerHTML = cookies;
    
}