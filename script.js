// API KEY = GGm32mOa7AV5BWE9COkMUA8X8X34Cd1x

let topics = ["dog", "cat", "otter", "chicken", "donkey", "squirrel", "bear", "monkey", "elephant", "mouse", "rabbit", "hedgehog", "camel", "lion", "kangaroo"];

function buttonBuilder() {
    $('.button-area').empty();
    for(let i = 0; i<topics.length;i++){
        let newButton = $('<button class="topic-button">' + topics[i] + '</button>');
        $('.button-area').append(newButton);
    }
}

let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + panda + "&api_key=GGm32mOa7AV5BWE9COkMUA8X8X34Cd1x&limit=1"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    $('.gif-area').html('<img class="gif" src="' + response.data[0].images.original_still.url +'" alt="image should appear here">');
    $('.gif').on('click', function() {
        let source = $(this).attr('src');
        if (source === response.data[0].images.original_still.url) {
            $(this).attr('src', response.data[0].images.original.url);
        }else if(source === response.data[0].images.original.url){
            $(this).attr('src', response.data[0].images.original_still.url);
        };
    });
});




