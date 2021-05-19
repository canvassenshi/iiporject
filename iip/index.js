$(document).ready(function() {

    //dark-mode
    $("#moon").click(function() {
        $("main").addClass('bg-gray-900');
        $(".dark").removeClass('text-gray-600');
        $("h2").removeClass('text-gray-900');
        $(".dark, h2").addClass('text-gray-300');
        $("#form").addClass('bg-gray-900');
        $("#moon").fadeOut(500);
        $("#sun").fadeIn(1500);
        $("#sun").removeClass('hidden');


    }); //do this when we click on 

    $("#sun").click(function() {
        $("main").removeClass('bg-gray-900');
        $(".dark").addClass('text-gray-600');
        $("h2").addClass('text-gray-900');
        $(".dark, h2").removeClass('text-gray-300');
        $("#form").removeClass('bg-gray-900');
        $("#sun").fadeOut(500);
        $("#moon").fadeIn(1500);
        $("#moon").removeClass('hidden');
    }); //do this when we click on 

    $("#colorSwitch").click(function() {
        $(".colorMode").toggleClass('hidden');

    });


    $("a[href^='#']").click(function(e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        } /* speed */ );
    });


});