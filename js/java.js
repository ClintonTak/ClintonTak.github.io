$(document).ready(function(){
	$("#navHome").addClass('active');
	$(".home").show();
    $(".about").hide();
    $(".resume").hide();
    $(".projects").hide();
    $(".contact").hide();

    $("homeButton").click(function(){
        $(".home").show();
        $(".about").hide();
        $(".resume").hide();
        $(".projects").hide();
        $(".contact").hide();
    });

    $("aboutButton").click(function(){
        $(".home").hide();
        $(".about").show();
        $(".resume").hide();
        $(".projects").hide();
        $(".contact").hide();
    });

    $("resumeButton").click(function(){
        $(".home").hide();
        $(".about").hide();
        $(".resume").show();
        $(".projects").hide();
        $(".contact").hide();
    });

    $("projectsButton").click(function(){
        $(".home").hide();
        $(".about").hide();
        $(".resume").hide();
        $(".projects").show();
        $(".contact").hide();
    });

    $("contactButton").click(function(){
        $(".home").hide();
        $(".about").hide();
        $(".resume").hide();
        $(".contact").show();
        $(".projects").hide();
    });

    $('ul li').click(function(){
  		$(this).addClass('active');
 		$(this).parent().children('li').not(this).removeClass('active');
	});
    
});


