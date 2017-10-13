$(document).ready(function(){
    $("#a").click(function(){
     $(this).fadeOut(2000);
     $("#b").children().css({"color": "green", "border": "2px solid red"});
    });

	$("#kv1").siblings().click(function(){
    $(this).siblings().fadeOut(2000);
    });

	$("#kv22").click(function(){
    $(this).children().fadeOut(1000);
    });

	$("#c").click(function(){
    $(this).parent().fadeOut(4000);
    });


});