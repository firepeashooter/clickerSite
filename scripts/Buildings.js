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

//Building Names and Id of the element that displays it's information
const brettFactory = new Building('Brett Factory', 0, 1);
const factoryID = "brettFactoryLevel";


let intervalID;



function buyBuilding(building, id){

    brettFactory.level += 1;
    document.getElementById(id).innerHTML = building.level;
    

    //Reset the interval so it updates the count and so that there is only 1 interval happening at a time
    if (intervalID){
        clearInterval(intervalID)
    }

    //Every second we call the produce cookies function on building
    intervalID = setInterval(() => {
        building.produceCookies(); // Arrow function magic 
    }, 1000);
}


function sellBuilding(building, id){

    //If building is level 0 or lower don't update the level again and end the interval (timer)
    if (building.level <= 0){
        console.log(building.name +  ' already all sold')
        clearInterval(intervalID)
    }else{
        building.level -= 1
        document.getElementById(id).innerHTML = building.level;
        
    }  
}





