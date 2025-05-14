var tooltip = document.querySelectorAll('.upgrade--tooltip');

document.addEventListener('mousemove', fn, false);

function fn(e) { //Runs everytime the mouse moves
    for (var i=tooltip.length; i--;) { //Loops through all the tooltips in tooltip and brings them all to the cursor
        tooltip[i].style.left = (e.pageX - 10) + 'px';
        tooltip[i].style.top = (e.pageY + 10) + 'px';
    }
} //Only the hover tooltip is shown thanks to the CSS .upgrade:hover .upgrade--tooltip class spec