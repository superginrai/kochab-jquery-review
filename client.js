
$(document).ready(onReady);//pass in the whole function not just the return

console.log('jQuery Lecture');

function onReady() { //call back function
    console.log('jQuery is up and running');
    $('h1').addClass('funny');
    $('h1').css('color', 'red');//jQuery method and "style atribute"
  
    //getters and setters
    console.log ($('h2').text()); //get text value of h2 (and logs it to the console)
    $('h2').text('You have been set!!!');

    // inputs (also getter and setter)
    $('#nameInput').val('Cory');//setter for input val
    console.log ($('#nameInput').val());//gets input val (and logs it to the console)

    // events
    // event handler
    $('#clickableButton').on('click', function() {
        console.log($('#nameInput').val());
    });

    $('#otherButton').on('click', function() {
        console.log('I was clicked!');
    });
}

