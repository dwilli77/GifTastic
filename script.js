// API KEY = yOEsL4XsJC1T3awMVcC8cx8B4v5wacvv

let topics = ["dog", "cat", "otter", "chicken", "donkey", "squirrel", "bear", "monkey", "elephant", "mouse", "rabbit", "hedgehog", "camel", "lion", "kangaroo"];

let topic = "";

function buttonBuilder() {
    $('.button-area').empty();
    for(let i = 0; i<topics.length;i++){
        let newButton = $('<button class="topic-button" value="' + topics[i] + '">' + topics[i] + '</button>');
        $('.button-area').append(newButton);
    };
}
buttonBuilder();

// clicking on a topic button populates the page with Gifs
$('.topic-button').on('click', function(){
    // reassings the topic in the queryURL
    topic = $(this).attr('value');
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=yOEsL4XsJC1T3awMVcC8cx8B4v5wacvv$limit=10"
    // queries that URL and builds gifs based on response
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $('.gif-area').empty();
        let dataArray = response.data;
        console.log(response);
        for(let i = 0; i < dataArray.length;i++){
            let gifDiv = $('<div class="gif-card">');
            let gifTitle = $('<div class="git-title">'+ response.data[i].title+'</div>');
            let newGif = $('<img class="gif" src="' + response.data[i].images.fixed_height_still.url +'" data-pos="'+ i +'">');
            let gifRating = $('<div class="gif-rating">Rating: '+ response.data[i].rating.toUpperCase()+'</div>');
            gifDiv.append(gifTitle, newGif, gifRating);
            $('.gif-area').append(gifDiv);
        };
        // clicking each gif will let it play until clicked again
        $('.gif').on('click', function() {
            let source = $(this).attr('src');
            let position = $(this).data('pos');
            if (source === response.data[position].images.fixed_height_still.url) {
                $(this).attr('src', response.data[position].images.fixed_height.url);
            }else if(source === response.data[position].images.fixed_height.url){
                $(this).attr('src', response.data[position].images.fixed_height_still.url);
            };
        });
    });
});

$.ajax({
    url:"https://api.giphy.com/v1/gifs/search?q=dog&api_key=yOEsL4XsJC1T3awMVcC8cx8B4v5wacvv$limit=10",
    method: "GET"
}).then(function(response){
    console.log(response);
});

