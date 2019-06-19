function showMultiplierTable(number) {
    for(var i = 0; i<=10; i++){
        var result= number*i;
        console.log(number + '*' + i +'='+result);
    }
}

console.log(showMultiplierTable(7));




for(var i=1; i<=10; i++ ){
    var number=Math.floor(Math.random() * 181) + 20;
    if(number%2===0){
        console.log(number+" is an even number!");
    }else{
        console.log(number+ " is an odd number.")
    }

}


for(var i=0;i<=10; i++){
    console.log(String(i).repeat(i));
}







for(var j=100; j>=5; j=j-5){
    console.log("This is the number " + j)
}