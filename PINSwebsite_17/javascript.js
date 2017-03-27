jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

 
    $(document).ready(function () {
        $('.flexslider').flexslider({
            animation: 'fade',
            controlsContainer: '.flexslider'
        });
    });
</script>
  

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});  


/*////////////////////////////////////////////////////////////////////////////////*/
/*////////////////////////////   SPOTIFY API BUTTON //////////////////////////*/
/*////////////////////////////////////////////////////////////////////////////////*/

    function followPlaylist(accessToken, playlistUri) {
        var parts = playlistUri.split(':');
        $.ajax({
            url: 'hhttps://api.spotify.com/v1/users/pinsband/playlists/6iHLNP47aHnnIXkVXfuKvc/followers',
            headers: {
               'Authorization': 'Bearer ' + BQA5_DSa3pZefUYqrQ2XltlziSQdVTRSRJNLS7z8-_Qp-k0RnUSDwpY_GmOaN1HqVW2LaxGnLEt8ZFjGg9E4DirMood-B3B77PANeOSeMvWdI88opfqT20X8Qz99jbqITM_Ab9SePobEYGebs7szqop0i9zjtNlzz-x_NoQqhVvpngPwhOcd
            },
            method: 'PUT',
            success: function() {
                followButton.textContent = 'Following';
            },
            dataType: 'html',
            error: function(e) {
                console.error(e);
            }
        });
    }

    var followButton = document.getElementById('btn-follow'),
        playlistUriInput = document.getElementById('playlist-uri');
    
    followButton.addEventListener('click', function() {
        login(function(accessToken) {
            followPlaylist(accessToken, playlistUriInput.value);
        });
    });
    
}();