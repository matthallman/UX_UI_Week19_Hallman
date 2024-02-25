function fade() {
    $('.preloader').fadeOut("gradual");
}
setTimeout(fade, 3000);


$(document).ready(function () {
    $('.workGrid button').hover(
        function () {
            $(this).css('background-color', '#0056b3'); // Change button color on hover
        },
        function () {
            $(this).css('background-color', '#007bff'); // Change button color back on mouseout
        }
    );
});
