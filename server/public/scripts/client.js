$( document ).ready( readyNow );

function readyNow(){
    console.log( 'JQ' );
    $('#addSongButton').on('click', addSong);
    getSongs();
} // end readynow



function addSong() {
    console.log('in addSong');
    // get user input
    // package in an object
    // send to server via AJAX
    const objectToSend = {
        artist: $('#artistIn').val(),
        published: $('#publishedIn').val(),
        rank: $('#rankIn').val(),
        track: $('#trackIn').val()
    }
    console.log('in addSong', objectToSend);
    $.ajax({
        method: 'POST',
        url: '/songs',
        data: objectToSend
    }).then(function(response){
        console.log('back from POST with', response);
        getSongs();
    }).catch(function(err){
        console.log('error with POST', err);
    });
} // end addSong

function getSongs(){
    $.ajax({
        method: 'GET',
        url: '/songs'
    }).then(function(response){
        console.log('got back from get with a response', response)
    }).catch(function(err){
        console.log('error getting data', err);
    })
}