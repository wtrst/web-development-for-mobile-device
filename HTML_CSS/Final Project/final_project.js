//       Author : Wataru Sato 
// Created Date : 27 Oct 2017 

$(function () {
    $('a[href^=#]').click(function () {
        var speed = 700;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});

function email(){
    
    var obj;
    var disp;
    obj = document.getElementById("mail");
    disp = obj.style.display;
    
    if (disp === "none" || disp === "") {
        obj.style.display = "block";    
    } else {
        obj.style.display = "none";
    }
    
}