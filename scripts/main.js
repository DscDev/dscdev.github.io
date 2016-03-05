$(function() {
  changeSize();
  window.onresize = function(event) {
    changeSize();
  };
  function changeSize() {
    var screen = window.innerHeight;
    $(".slide").css("height", screen + 'px');
    $(".title").css("fontSize", screen / 15 + 'px');
    $(".description").css("fontSize", screen / 30 + 'px');
  }
});
