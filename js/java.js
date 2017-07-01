$(document).ready(function(){
	$("#home").show();
    $("#about").hide();
    $("#resume").hide();
    $("#contact").hide();

    $("homeButton").click(function(){
        $("#home").show();
        $("#about").hide();
        $("#resume").hide();
        $("#contact").hide();
    });

    $("aboutButton").click(function(){
        $("#home").hide();
        $("#about").show();
        $("#resume").hide();
        $("#contact").hide();
    });

    $("ResumeButton").click(function(){
        $("#home").hide();
        $("#about").hide();
        $("#resume").show();
        $("#contact").hide();
    });

    $("contactButton").click(function(){
        $("#home").hide();
        $("#about").hide();
        $("#resume").hide();
        $("#contact").show();
    });

    
});


