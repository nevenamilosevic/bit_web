//intro

$(function () {
    console.log("Hello, world!");
});

//sselecting
$("li:first").css({
    "border-bottom": "2px solid blue"
})

$("li").css({
    "text-transform": "uppercase"
})

$(".active").css({
    "color": "red"
})

//dodeljivanje klase 
$("li:last").addClass("proba");

$(".proba").css({
    "color": "green"
})

$("li:nth-child(2)").css({
    "background-color": "orange"
})



