var i=2;
while(i<=65536){
    console.log(i);
    i=i*2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
// var clientBuy = Math.floor(Math.random() * 5) + 1;

do {
    // var allCones = Math.floor(Math.random() * 50) + 50;
    var clientBuy = Math.floor(Math.random() * 5) + 1;
    if (clientBuy>allCones){
        console.log("I can't sell you");
    }else(allCones= allCones-clientBuy);
    console.log("I sold " + clientBuy + " ice cream.")



}while (allCones>0);
console.log("I sold out!");