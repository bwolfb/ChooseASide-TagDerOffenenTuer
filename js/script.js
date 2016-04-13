$(document).ready(function () {
  var resizeTimer;
  var onDarkside = false;
  var onLightside = false;
  $(window).on('resize', function(e) {
    $("#darkside,#lightside,#darkside_title,#lightside_title,#darksidebackground,#lightsidebackground").css("transition-duration","0s");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      $("#darkside,#lightside,#darkside_title,#lightside_title,#darksidebackground,#lightsidebackground").css("transition-duration","0.5s");
    }, 250);
  });

  $('#lightside_title').on({
    mouseover: function(){
      if (!onLightside) {
        $("#darksidebackground").insertBefore("#lightsidebackground");
        $("#lightside").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100vh)");
        $("#lightsidebackground").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100vh)");
      }
    },
    mouseleave: function(){
      if (!onLightside) {
        $("#lightside").css("-webkit-clip-path","polygon(65% 0, 100% 0, 100% 100%, 35% 100vh)");
        $("#lightsidebackground").css("-webkit-clip-path","polygon(65% 0, 100% 0, 100% 100%, 35% 100vh)");
      }
    },
    click: function(){
      onLightside = true;
      $("#lightside_title").css("margin-top","30vh");
      $("#lightside_title").css("margin-left","40vw");
      $("#lightside").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100vh)");
      $("#lightsidebackground").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100vh)");
      $("#lightside").prepend($("<button id=\"lightside_button\"><span>Back </span></button>"));
      $("#lightside_button").slideDown(600);

      $("#lightside_button").click(function() {
        $("#lightside").css("-webkit-clip-path","polygon(65% 0, 100% 0, 100% 100%, 35% 100vh)");
        $("#lightsidebackground").css("-webkit-clip-path","polygon(65% 0, 100% 0, 100% 100%, 35% 100vh)");
        $("#lightside_title").css("margin-top","65vh");
        $("#lightside_title").css("margin-left","71vw");
        $("#lightside_button").slideUp(600);
        $("#lightside_button").remove();
        onLightside = false;
      });
    }
  });

  $('#darkside_title').on({
    mouseover: function(){
      if (!onDarkside) {
        $("#lightsidebackground").insertBefore("#darksidebackground");
        $("#darkside").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100vh)");
        $("#darksidebackground").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100vh)");
      }
    },
    mouseleave: function(){
      if (!onDarkside) {
        $("#darkside").css("-webkit-clip-path","polygon(65% 0, 0 0, 0 100%, 35% 100vh)");
        $("#darksidebackground").css("-webkit-clip-path","polygon(65% 0, 0 0, 0 100%, 35% 100vh)");
      }
    },
    click: function(){
      onDarkside = true;
      $("#darkside_title").css("margin-top","30vh");
      $("#darkside_title").css("margin-left","40vw");
      $("#darkside").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100vh)");
      $("#darksidebackground").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100vh)");
      $("#darkside").prepend($("<button id=\"darkside_button\"><span>Back </span></button>"));
      $("#darkside_button").slideDown(600);

      $("#darkside_button").click(function() {
        $("#darkside").css("-webkit-clip-path","polygon(65% 0, 0 0, 0 100%, 35% 100vh)");
        $("#darksidebackground").css("-webkit-clip-path","polygon(65% 0, 0 0, 0 100%, 35% 100vh)");
        $("#darkside_title").css("margin-top","20vh");
        $("#darkside_title").css("margin-left","5vw");
        $("#darkside_button").slideUp(600);
        $("#darkside_button").remove();
        onDarkside = false;
      });

    }
  });
});
