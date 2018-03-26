function bdayFunction(numberOfDays) {
    // birthday is greater than 30 days away
    if (numberOfDays >= 30) {
    	console.log("I'm so sad my birthday is", numberOfDays, "away");
    }
    else if(numberOfDays < 30 && numberOfDays > 5) {
        console.log("I'm so excited...I just can't hide it...lets P-A-R-T-Y!!!!")
    }
    else if(numberOfDays < 5 && numberOfDays > 0) {
        console.log("ITS ALMOST HERE!!!!!!!!");
    }
    else if(numberOfDays === 0) {
        console.log('HAPPY BIRTHDAY!!!');
    }
}
bdayFunction(60);
bdayFunction(22);
bdayFunction(2);
bdayFunction(1);
bdayFunction(0);
bdayFunction(-1);
