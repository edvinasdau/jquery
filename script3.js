console.log("loaded")


$(document).ready(function(){
    $("#btn").click(function(){
        $.getJSON("http://ca-php.lt/json/products.php", function(result){
            $.each(result, function(i,row){
                console.log(row);
                $("#t tbody").append("<tr><td>"+row.name + "</td><td>"+row.price + "</td><td>"+row.stock + "</td></tr>");
            });
        });
    });
});

$(document).ready(function(){
    $("#btn").click(function(){
        $.getJSON("http://ca-php.lt/json/emploees.php", function(result){
            $.each(result, function(i,row){
                console.log(row);
                $("#t2 tbody").append("<tr><td>"+row.name + "</td><td>"+row.surname + "</td><td>"+row.email + "</td><td>"+row.drinks + "</td></tr>");
            });
        });
    });
});

$(document).ready(function(){
    $("#btn").click(function(){
        $.getJSON("http://ca-php.lt/json/recipes.php", function(result){
            $.each(result, function(i,row){
                console.log(row);
                $("#t3 tbody").append("<tr><td>"+row.name + "</td><td>"+row.contents + "</td><td>"+row.time_to_prepare + "</td><td>"+row.vegan + "</td></tr>");
            });
        });
    });
});
