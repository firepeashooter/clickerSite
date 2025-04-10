class Building{
    constructor(name, level=0, cps){
        this.name = name
        this.level = level
        this.cps = cps
    }

    produceCookies(){
        cookies += (this.cps * this.level)
        document.getElementById('counter').innerHTML = cookies;
    }

}



let intervalID;

function buyBrettFactory(){

    brettFactory.level += 1;
    document.getElementById('brettFactoryLevel').innerHTML = brettFactory.level;
    

    //Reset the interval so it updates the count and so that there is only 1 interval happening at a time
    if (intervalID){
        clearInterval(intervalID)
    }

    //Every second we call the produce cookies function on brettFactory
    intervalID = setInterval(() => {
        brettFactory.produceCookies(); // Arrow function ensures 'this' refers to brettFactory
    }, 1000);
}


function sellBrettFactory(){


    if (brettFactory.level <= 0){
        console.log('Brett Factory already all sold')
        clearInterval(intervalID)
    }else{
        brettFactory.level -= 1
        document.getElementById('brettFactoryLevel').innerHTML = brettFactory.level;
        
    }  
}




const brettFactory = new Building('Brett Factory', 0, 1);
