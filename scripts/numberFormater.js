function numberFormatter(number){

    if (number >            1000000  && number < 1000000000){ //Checking for 1 million
        return `${(number / 1000000).toFixed(2)} Million`;
    
    } else if (number >     1000000000 && number < 1000000000000){ //Checking for 1 billion
        return `${(number / 1000000000).toFixed(2)} Billion`;

    } else if (number >     1000000000000 && number < 1000000000000000){ // Checking for Trillion
        return `${(number / 1000000000000).toFixed(2)} Trillion`;
    } else {
        return number.toLocaleString();
    }
}