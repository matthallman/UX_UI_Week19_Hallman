function fade() {
    $('.preloader').fadeOut("gradual");
}
setTimeout(fade, 2000);


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

$(document).ready(function(){
    $('#menu').on('change', function() {
        var selectedOption = $(this).val();
        if (selectedOption !== "#") {
            window.location.href = selectedOption; // Redirect to selected page
        }
    });
});