class Building{
    constructor(name, level=0, cps, cost){
        this.name = name
        this.level = level
        this.cps = cps
        this.cost = cost
    }

}

class Upgrade{
    constructor(name, cost){
        this.name = name
        this.cost = cost
        this.bought = false
    }

}

//Upgrades
let brettFactoryUpgrade = new Upgrade('brettFactoryUpgrade', 5);
let brettFarmUpgrade = new Upgrade('brettFarmUpgrade', 5);
let gamblingHouseUpgrade = new Upgrade('gamblingHouseUpgrade', 5);
let brettLabUpgrade = new Upgrade('brettLabUpgrade', 5);
let brettRecursionUpgrade = new Upgrade('brettRecursionUpgrade', 5);
let brettSingularityUpgrade = new Upgrade('brettSingularityUpgrade', 5);



//Global cps
let globalCPS = 0;



//Global buildingsBought
let buildingsBought = 0;

//Global cookies ever made
let allTimeCookies = 0

//TODO: EDIT ALL OF THE BUILDING VALUES

//Building Names and Id of the element that displays it's information
const brettFactory = new Building('Brett Factory', 0, 1, 10);
const factoryID = "brettFactoryLevel";
const factoryCostID = "brettFactoryCost";
const factoryCPSID = 'brettFactoryCPS';

const brettFarm = new Building('Brett Farm', 0, 5, 500);
const farmID = "brettFarmLevel";
const farmCostID = "brettFarmCost";
const farmCPSID = "brettFarmCPS";

const gamblingHouse = new Building('Brett Gambling House', 0, 100, 6200);
const gamblingID = "brettGamblingLevel";
const gamblingCostID = "brettGamblingCost";
const gamblingCPSID = "brettGamblingCPS";

const brettLab = new Building('Brett Labs', 0, 520, 50000);
const labID = "brettLabLevel";
const labCostID = "brettLabCost";
const labCPSID = "brettLabCPS";

const brettRecursion = new Building('Brett Recursion', 0, 5300, 320320);
const recursionID = "brettRecursionLevel";
const recursionCostID = "brettRecursionCost";
const recursionCPSID = "brettRecursionCPS";

const brettSingularity = new Building('Brett Singularity', 0, 620000, 1000000);
const singularityID = "brettSingularityLevel";
const singularityCostID = "brettSingularityCost";
const singularityCPSID = "brettSingularityCPS";


let intervalID;


function produceCookies(){
    cookies += globalCPS;

    //consitently generates cookies based on globalCPS to keep track of total cookies ever
    allTimeCookies += globalCPS;
    document.getElementById('counter').innerHTML =  numberFormatter(cookies);
    document.getElementById('brettsPerSecond').innerHTML = numberFormatter(globalCPS)
    document.getElementById('allTimeCookies').innerHTML = numberFormatter(allTimeCookies)
}


function upgradeBuilding(building, upgrade, upgradeId, cpsID){

    console.log(upgrade.bought)

    //Flag to check if the upgrade has already been bought
    if((upgrade.bought)){
        console.log('Already made this purchase')
    
    //If we have the cookies purchase the upgrade
    }else if (cookies >= upgrade.cost){
        building.cps *= 2;
        cookies -= upgrade.cost;

        document.getElementById(cpsID).innerHTML = numberFormatter(building.cps);
        document.getElementById('counter').innerHTML = numberFormatter(cookies);
        console.log(building.name + 'upgraded');
        //Set the flag to false
        upgrade.bought = true
        //Change the image to the checkmark
        document.getElementById(upgradeId).src = "images/checkbox.avif";

    }else{
        console.log("You do not have enough cookies to make this purchase");
    }



}



function buyBuilding(building, id, costID){


    if (cookies >= building.cost){ //Buy the Building Successfully
        
        //Update the level and cost, and buildingsBought and cast it to the website
        building.level += 1;
        cookies -= building.cost;
        buildingsBought += 1;
        building.cost *= 2;   //Doubles the cost of the building each time
        document.getElementById(id).innerHTML = building.level;
        document.getElementById(costID).innerHTML = numberFormatter(building.cost);
        document.getElementById('buildingsBought').innerHTML = numberFormatter(buildingsBought);

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
        document.getElementById(costID).innerHTML = numberFormatter(building.cost);

        //Updates the global cps counter 
        globalCPS -= building.cps
        
        
    }  
}





