function numberFormatter(number){

    if (number > 1000000  && number < 1000000000){ //Checking for 1 million
        return `${(number / 1000000).toFixed(2)} Million`;
    } else{
        return number;
    }



}