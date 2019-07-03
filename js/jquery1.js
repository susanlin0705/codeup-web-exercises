$("body").css("background-color", "#F1F1F1");

// $("#title,#title-why,#title-use").css('color',"#7CB243")
// // $("#title").click(function(){
// //     alert("Now you know what is jQuery!")
// // });
// alert($("#title").html());
// alert($("#title-why").html());
//
// var content= $("#title-use").html();
// alert(content);
//
//
//this is to show up on the web page
// $('#title-why').click(function(){
//     alert("Isn't jQuery easy to learn?!")
// });
//
// $('.codeup').css('border',"1px solid red");
// $('.codeup').css('font-size',"20px");
//
//
// $('h1,p,li').css("background-color","lightpink")
// alert($('h1').html());

$("h1").click(function(){
    $(this).css("background-color","#7CB243")
});

$("p").dblclick(function(){
    $("p").css("font-size","18px")
});
//('p') will do it at once ,("this ")will do it separately//
$('.codeup').hover(
    function(){
    $(this).css("color","red")
        },
    function(){
        $(this).css("color","black" )
    }

);
