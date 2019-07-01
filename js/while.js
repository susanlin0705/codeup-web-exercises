var i=2;
while(i<=65536){
    console.log(i);
    i=i*2;

}
//this is how you get a random number between 50-100
var allCones = Math.floor(Math.random() * 50) + 50;
// var clientBuy = Math.floor(Math.random() * 5) + 1;

do {
    //this expression will generate a random number between 1-5
    var clientBuy = Math.floor(Math.random() * 5) + 1;
    console.log("Staring the day with " + allCones + " cones.");
    if (clientBuy>allCones){
        console.log("I can't sell you, I only have "+ allCones+ " ." );
    }else {
        allCones = allCones - clientBuy;
        console.log("I sold " + clientBuy + " ice cream.");
    }



}while (allCones>0);
console.log("I sold out!");



