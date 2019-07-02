$("body").css("background-color", "#F1F1F1");

$("#title,#title-why,#title-use").css('color',"#7CB243")
// $("#title").click(function(){
//     alert("Now you know what is jQuery!")
// });
alert($("#title").html());
alert($("#title-why").html());

var content= $("#title-use").html();
alert(content);



$('#title-why').click(function(){
    alert("Isn't jQuery easy to learn?!")
});

$('.codeup').css('border',"1px solid red");
$('.codeup').css('font-size',"20px");


$('h1,p,li').css("background-color","yellow")
alert($('h1').html());
