$(document).ready(function(){
$("form#enter").submit(function() {
    var item1 = $("#item1").val();
    var item2 = $("#item2").val();
    var item3 = $("#item3").val();

    var lists = [];
    lists.push(item1);
    lists.push(item2);
    lists.push(item3);
    
    lists.sort();
    
    lists = lists.map(function(x){
        return x.toUpperCase();
    });

    $(".food").text(lists[0]);
    $(".food2").text(lists[1]);
    $(".food3").text(lists[2]);


    $("#enter").hide();
    $("#list").show();


    event.preventDefault();
});
});
