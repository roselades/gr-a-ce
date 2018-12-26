$(document).ready(function() {

//BROWSER DETECTION

function browserDetection() {
 if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
{
    $(".browserOverlay").css("display", "block")
}
else if(navigator.userAgent.indexOf("Chrome") != -1 )
{
    $(".browserOverlay").css("display", "block")
}
else if(navigator.userAgent.indexOf("Safari") != -1)
{
    $(".browserOverlay").css("display", "block")
}
else if(navigator.userAgent.indexOf("Firefox") != -1 )
{
     $(".browserOverlay").css("display", "none")
}
else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
{
  $(".browserOverlay").css("display", "block")
}
else
{
   $(".browserOverlay").css("display", "block")
}
}

//TOOLTIP
$('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});


//AUDIO CONTROL

$(".audioOnOff").click(function(){
    if (status == 1){
      audio.pause();
      $(this).css("background-image", "url('images/musicOffWhite.png')");;
      status=0;
    } else {
      audio.play();
      $(this).css("background-image", "url('images/musicOnWhite.png')");
      status=1;
    }});

$(".button").on("click", function(event){
  window.location = "index.html";
});
//AUDIO AUTOPLAY

var source = "audio/bright.mp3";
var audio = new Audio()
var status = 1;
audio.src = source;
audio.load();
audio.play();
audio.loop = true;

});
