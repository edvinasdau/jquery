console.log("loaded...")


$(document).ready(function(){
    $("#btn1").click(function(){
        $("#div1").fadeToggle(2000);
        $("#div3").slideUp(2000).slideDown(2000);
    });



    $("#flip").click(function(){
        $("#a").slideToggle("slow");
    });



    $("#btn2").click(function(){
        var div = $("#div2");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
        });




    $("#btn3").click(function(){
        $("#div3").slideUp(2000).slideDown(2000);
    });
});