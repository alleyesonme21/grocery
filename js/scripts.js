$(document).ready(function(){
$("form#enter").submit(function() {
    var item1 = $("#item1").val();
    var item2 = $("#item2").val();
    var item3 = $("#item3").val();

    $(".food").text(item1);
    $(".food2").text(item2);
    $(".food3").text(item3);


    $("#enter").hide();
    $("#list").show();


    event.preventDefault();
});
});
