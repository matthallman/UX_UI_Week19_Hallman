function fade() {
    $('.preloader').fadeOut("gradual");
}
setTimeout(fade, 3000);


$(document).ready(function () {
    $('.workGrid button').hover(
        function () {
            $(this).css('background-color', '#437C90'); // Change button color on hover
        },
        function () {
            $(this).css('background-color', '#D0A646'); // Change button color back on mouseout
        }
    );
});
