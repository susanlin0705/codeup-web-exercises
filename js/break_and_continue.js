


// var number=Math.floor(Math.random() * 50) + 1;
// var chooseNumber;

while(true){

    chooseNumber=prompt("choose an odd number between 1 to 50");

    if(isNaN(chooseNumber)) {
        alert("Try again");
        continue;
    }

    var num = parseInt(chooseNumber);

    if(num%2===0) {
        continue;
    }


    if(num <= 50 && num > 0) {
        break;
    }


}


var totalNumber=0;
while (totalNumber<=50){
    // var totalNumber=Math.floor(Math.random() * 50) + 1;
    totalNumber++;
    if (totalNumber%2===0){
        continue;
    }

    if (totalNumber===Number(chooseNumber)){
        console.log("Yikes! Skipping Number is "+ chooseNumber + " !");
    }else{
        console.log("Here is an odd number: " + totalNumber);
    }

}


