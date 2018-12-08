$(document).ready(function() {

  $(window).resize(function() {

    var w = window.innerWidth;
    var h = window.innerHeight;

  if (h <= 650 || w <= 650){
    $(".tooSmall").css("display", "block");
  } else {
    $(".tooSmall").css("display", "none");
  }
})

  var searchString = document.location.search;

  function yoWheresMyDataBro() {


  var name = getQueryParam("name", searchString);
  var cat = getQueryParam("cat", searchString);

  $("#destination").html(name)

  if (cat == "black") {
    $(".catImage").css("background-image", "url('images/sadcatblack.png')")
  }



  };



  function getQueryParam(parameter, qs) {
  qs = "&" + qs.replace(/%20/gi, ' ' );
  var p = escape(unescape(parameter));
  var regex = new RegExp("[?&]" + p + "=(?:([^&]*))?", "i");
  var match = regex.exec(qs);
  var value = "";
  if (match != null) {
    value = match[1];
  };
  return value;
  };


  //INITIALIZATION
  yoWheresMyDataBro();

});
