$(function() {

  // $slides.style.height =  window.innerHeight + 'px';
  //  $name.style.fontSize =  window.innerHeight / 15 + 'px';
  $(".slide").css("height", window.innerHeight + 'px');
  $(".name").css("fontSize", window.innerHeight / 15 + 'px');
  $(".career").css("fontSize", window.innerHeight / 30 + 'px');

  window.onresize = function(event) {

    $(".slide").css("height", window.innerHeight + 'px');
    $(".name").css("fontSize", window.innerHeight / 15 + 'px');
    $(".career").css("fontSize", window.innerHeight / 30 + 'px');

    // $slides.style.height = window.innerHeight + 'px';
    // $name.style.fontSize = window.innerHeight / 15 + 'px';
  };

});
