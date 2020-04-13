// The first line selecats all of the <h1>-<h6> headings, and adds a value of headline to thier class attributes
$(':header').addClass('headline');
// the second line selects the first three list items and does two things: 1) The elements are hidden(in order to allow the next step).  2) The elements fade into view.
$('li:lt(3)').hide().fadeIn(1500);
// The last three lines of the script set an event listerener on each of the <li> elements.  When a user clicks on one, it triggers an anonymous function to remove that element from the page.
$('li').on('click', function() {
    $(this).remove();
});