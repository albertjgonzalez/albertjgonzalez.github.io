
$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(50);

    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").slideDown(500);
        $("body").fadeOut(500, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});
