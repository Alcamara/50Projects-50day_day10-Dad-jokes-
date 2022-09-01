$(document).ready(readyNow);

function readyNow() {
    getJoke()
    $('#jokebtn').on('click', getJoke)
}

function getJoke() {
    let devJoke = [];

    $.ajax({
        method: 'GET',
        url: 'Chuck-jokes'
    }).then((joke)=>{
        displayJokes(joke)
    })
}


function displayJokes(joke) {
    $('#joke').empty()
    $('#joke').append(
        `<p>${joke.question}</p>
        <p>${joke.punchline}</p>
        `
        
        )
}