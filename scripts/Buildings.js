class Building{
    constructor(name, level=0, cps, cost){
        this.name = name
        this.level = level
        this.cps = cps
        this.cost = cost
    }

}

//Global cps
let globalCPS = 0;

//Building Names and Id of the element that displays it's information
const brettFactory = new Building('Brett Factory', 0, 1, 10);
const factoryID = "brettFactoryLevel";
const factoryCostID = "brettFactoryCost";


const brettFarm = new Building('Brett Farm', 0, 5, 100);
const farmID = "brettFarmLevel";
const farmCostID = "brettFarmCost";


let intervalID;


function produceCookies(){
    cookies += globalCPS;
    document.getElementById('counter').innerHTML = cookies;
    console.log(globalCPS)
}



function buyBuilding(building, id, costID){


    if (cookies >= building.cost){ //Buy the Building Successfully
        
        //Update the level and cost and cast it to the website
        building.level += 1;
        cookies -= building.cost;
        building.cost *= 2;   //Doubles the cost of the building each time
        document.getElementById(id).innerHTML = building.level;
        document.getElementById(costID).innerHTML = building.cost;

        //Updates the global cps counter
        globalCPS += building.cps 

        //Reset the interval so it updates the count and so that there is only 1 interval happening at a time (Not sure if we need this?)
        if (intervalID){
            clearInterval(intervalID)
        }

        //Every second we call produceCookies function which updates the cookie with the global cps
        intervalID = setInterval(produceCookies, 100);

    } else{ //Not enough cookies
        console.log("You do not have enough cookies to make this purchase")
    }
    
}


function sellBuilding(building, id, costID){

    //If building is level 0 or lower don't update the level again and end the interval (timer)
    if (building.level <= 0){
        console.log(building.name +  ' already all sold')
        

    }else{ //Sucessfully sell the building

        //Update building level and cost and cast it to the website
        building.level -= 1;
        building.cost /= 2;
        cookies += building.cost * 0.5; //Should give us back 50% of the building cost
        document.getElementById(id).innerHTML = building.level;
        document.getElementById(costID).innerHTML = building.cost;

        //Updates the global cps counter 
        globalCPS -= building.cps
        
        
    }  
}





