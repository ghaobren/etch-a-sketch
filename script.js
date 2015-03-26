

function newGrid(x) {
    for (i = 0; i < x * x; i++) {
        $('.container').append('<div class="block"></div>');
    }
    $('.block').height(960 / x);
    $('.block').width(960 / x);

    $('.block').mouseenter(function () {
        $(this).css('background-color', 'black');
    });
}

function clearContainer() {
    $('.block').remove();
}

function askGrid() {
    var num = prompt("enter box length");
    clearContainer();
    newGrid(num);

}

function firstGrid() {
    newGrid(16);

    
    $('#reset').click(function () {
        askGrid();
    });
} 

$(document).ready(firstGrid);
